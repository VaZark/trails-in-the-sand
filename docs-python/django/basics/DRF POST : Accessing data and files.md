# DRF POST : Accessing data and files

## POST data & files

Files can be accessed with `request.FILES`. Any other data is to be accessed with `request.DATA`.

By default, if an uploaded file is smaller than 2.5 megabytes, Django will hold the entire contents of the upload in memory. This means that saving the file involves only a read from memory and a write to disk and thus is very fast.

However, if an uploaded file is too large, Django will write the uploaded file to a temporary file stored in your system’s temporary directory. 

- `request.POST` : Only handles form data.  Only works for 'POST' method.
- `request.data` : Handles arbitrary data.  Works for 'POST', 'PUT' and 'PATCH' methods.

### DRF

```python
class ImageUploadParser(FileUploadParser): # Subclass and restrict file type
    media_type = 'image/*'

class MyUploadView(APIView):
  parser_class = (FileUploadParser,) # Upload only files
  # FormUploadParser - ensure form is parsed
  # ImageUploadParser - ensure images upload only

  def put(self, request, format=None):
    if 'file' not in request.data:
      raise ParseError("Empty content")

    f = request.data['file']

    """
    # Verify image type
    from PIL import Image ## Also used by ImageField()
    try:
      img = Image.open(f)
      img.verify()
    except:
      raise ParseError("Unsupported image type")
    """

    mymodel.my_file_field.save(f.name, f, save=True)
    return Response(status=status.HTTP_201_CREATED)
```

### Django Forms

Django's forms can be used to fetch data in a request and map it to a field.

```python
class UploadFileForm(forms.Form):
    title = forms.CharField(max_length=50)
    file = forms.FileField()
    multi_file_field = forms.FileField(widget=forms.ClearableFileInput(attrs={'multiple': True}))


def upload_file(request):
    if request.method == 'POST':
        form = UploadFileForm(request.POST, request.FILES) # FILES is also required
        if form.is_valid():
            handle_uploaded_file(request.FILES['file'])
            return HttpResponseRedirect('/success/url/')
    else:
        form = UploadFileForm()
    return render(request, 'upload.html', {'form': form})
```
