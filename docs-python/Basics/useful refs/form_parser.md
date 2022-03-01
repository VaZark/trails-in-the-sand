# Parsing Form data in python

Python has complete frameworks that handle data parsing when it comes to form requests but sometimes it's is necessary to handle the form parsing by yourself.

Case in point, AWS Chalice. This framework for AWS Lambda + Gateway does not natively support _parsing_ form data at the time of writing. So below, you can find the helper snippet for the same

```python
from requests_toolbelt.multipart import decode

def parse_multipart(request, raw_data):
    fields ={}
    
    for part in decoder.MultipartDecoder(raw_data, request.headers['content-type'], encoding="utf-8").parts:
        disposition = part.headers[b'Content-Disposition']
        print(part.headers)
        params = {}
        for dispPart in str(disposition).split(';'):
            kv = dispPart.split('=', 2)
            params[str(kv[0]).strip()] = str(kv[1]).strip('\"\'\t \r\n') if len(kv)>1 else str(kv[0]).strip()
        name = params['name'] if 'name' in params else BadRequestError("Field name is missing")
        fields[name] = part.content.decode(part.encoding)

    # # Logger
    # for key, val in fields.items():
    #     if key.endswith("file"):
    #         print(f"{key} :: redacted")
    #         continue
    #     print(f"{key} :: {val}")

    return fields
```
