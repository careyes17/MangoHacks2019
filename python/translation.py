from google.cloud import translate

translate_client = translate.Client()
text = u'Comment ­ça mére?'
target = 'us'
translation = translate_client.translate(text,target_language = target)
print(u'Text: {}'.format(text))
print(u'Translation: {}'.format(translation['translatedText']))
