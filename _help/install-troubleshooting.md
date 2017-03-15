---
layout: tutorial
title: "Troubleshooting"
---

### Image upload

When uploading JPEG images, you may run into the following error:

```
File "PIL/Image.py", line 375, in _getdecoder
raise IOError("decoder %s not available" % decoder_name)
IOError: decoder jpeg not available
```

This is likely due to a missing library. You can install the missing library and re-install Pillow to resolve this issue:

```
sudo apt-get install libjpeg-dev

pip install -I pillow
```

This [answer on Stack Overflow](http://stackoverflow.com/a/10109941/2942141){:target="_blank"} provides more information. 

### Retrieving audio files

If audio files refuses to be retrieved from the server, you probably need to enable CORS. For example, on Apache the following line needs to be added inside the `<Location>` from where your media files are being server:

```
Header set Access-Control-Allow-Origin "*"
```

Altering headers requires the use of [mod_headers](http://httpd.apache.org/docs/2.0/mod/mod_headers.html){:target="_blank"}. It is enabled by default on Apache, however, you may want to ensure it is enabled by running the following command:

```
a2enmod headers
```

### Installing GDAL on Debian

If you fail to install GDAL on Debian, follow the procedure:

1. Install dev tools:

```
sudo apt-get install libgdal-dev
export CPLUS_INCLUDE_PATH=/usr/include/gdal
export C_INCLUDE_PATH=/usr/include/gdal
```

2. Check which version of GDAL was installed:

```
gdalinfo --version
```

3. Use the same version (x.x.x) to install GDAL as a Python package:

```
pip install GDAL==x.x.x
```
