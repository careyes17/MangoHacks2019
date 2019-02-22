from google.cloud import vision
import requests
from io import BytesIO
import os

imageUri = "https://i.ytimg.com/vi/RmxG5n0FIHQ/hqdefault.jpg" or 'gs://my_bucket_bucket/0.jpg'

os.environ["GOOGLE_APPLICATION_CREDENTIALS"]="MyFirstProject-0e85ab04e95e.json"
client = vision.ImageAnnotatorClient()
response = client.annotate_image({
  'image': {'source': {'image_uri': imageUri}},
  'features': [{'type': vision.enums.Feature.Type.FACE_DETECTION}],
})
#print(response)
print(str(response)[str(response).find('joy'):str(response).find('Y}')-2])
x1, x2, y1, y2 = (0,)*4
def get_values():
  global x1, x2, y1, y2
  s1 = str(response)
  s2 = s1[s1.find('vertices'):]
  s3 = s2[:s2.find('y')+2]
  temporary = ""
  for n in range(len(s3)):
    if s3[0+n:1+n].isdigit():
      temporary += s3[0+n:1+n]
  s3 = s2[s2.find('y'):s2.find('y')+7]
  temporary2 = ""
  for n in range(len(s3)):
    if s3[0+n:1+n].isdigit():
      temporary2 += s3[0+n:1+n]
  s3 = s2[s2.find('vertices')+7:]
  s4 = s3[s3.find('vertices')+7:]
  s5 = s4[s4.find('vertices')+7:]
  s6 = s5[:s5.find('y')]
  temporary3 = ""
  for n in range(len(s6)):
    if s6[0+n:1+n].isdigit():
      temporary3 += s6[0+n:1+n]
  s7 = s5[s5.find('y'):s5.find('vertices')]
  temporary4 = ""
  for n in range(len(s7)):
    if s7[0+n:1+n].isdigit():
      temporary4 += s7[0+n:1+n]
  #print(temporary)
  #print(temporary2)
  x1 = int(temporary)
  y1 = int(temporary2)
  x2 = int(temporary3)
  y2 = int(temporary4)

get_values()
#print(x1,x2,y1,y2)

from PIL import Image, ImageDraw

# im = Image.open("0.jpg")
response = requests.get(imageUri)
img = Image.open(BytesIO(response.content))

draw = ImageDraw.Draw(img)
draw.rectangle(((x1, y1),(x2, y2)), outline=(0,255,0), width=4)
img.show()
del draw