print("buscando un conflicto en el merge")
print("hola mundo")
print("made a change in master")
print("made a hot fix")
print("branch testing")

'''
http://www.jaimegil.me/2012/12/26/a-python-restful-api-consumer.html
https://www.npmjs.com/package/wordpress-rest-api
search: javascript api for rest wordpress
https://wordpress.org/plugins/json-rest-api/
https://developer.wordpress.com/docs/rest-api-javascript/
'''

import requests

response = requests.get('http://testwp-c9-lmpizarro.c9.io/wp-json/media')

assert response.status_code == 200

for repo in response.json():
    #print '[{}] {}'.format(repo['language'], repo['name'])
    print repo["source"]
    #for k in repo:
    #    print ("%s -------> %s "%(k, repo[k]))


