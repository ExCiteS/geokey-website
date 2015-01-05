---
layout: tutorial
title:  "Troubleshooting"
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

This [answer on Stack Overflow](http://stackoverflow.com/a/10109941/2942141) provides more information. 
