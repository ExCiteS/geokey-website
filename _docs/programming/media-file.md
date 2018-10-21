---
layout: internal-docs
title:  "MediaFile"
---

MediaFiles are images, documents or videos that can be attached to [Observations](/docs/programming/observation.html).

### Attributes

Parameter              | Type                     | Description
-----------------------|--------------------------|-----------------------------------------------
`id`                     | int                      | Identifies file in the data base.
`name`                   | string                   | Title of the file.
`description`            | string                   | Long-form caption of the image.
`contribution`           | [Observation](/docs/programming/observation.html) | Observation this file is assigned to.
`creator`                | [User](/docs/programming/user.html) | User who added the file.
`created_at`             | datetime                 | Date and time when the file was added.
`status`                 | string                   | Status of the file. Must be one of `active`, `deleted`. Defaults to `active`.

#### File-specific attributes

##### ImageFile

Parameter              | Type                     | Description
-----------------------|--------------------------|-----------------------------------------------
`image`                  | ImageFile                | Image uploaded.

##### DocumentFile

Parameter              | Type                     | Description
-----------------------|--------------------------|-----------------------------------------------
`document`               | File                     | Document uploaded.
`thumbnail`              | ImageFile                | Thumbnail image of the document.

##### VideoFile

Parameter              | Type                     | Description
-----------------------|--------------------------|-----------------------------------------------
`video`                  | File                     | Video uploaded.
`youtube_id`             | string                   | ID of the video uploaded to YouTube.
`thumbnail`              | ImageFile                | Thumbnail image of the video.
`youtube_link`           | URL                      | Embedable link to the youtube video.

#### Read-only properties

Property               | Type                     | Description
-----------------------|--------------------------|-----------------------------------------------
`type_name`              | string                   | Indicates the file type. Is one of `ImageFile`, `DocumentFile`, `VideoFile`

### Methods

#### `delete()`

Deletes a MediaFile by setting its status to `deleted`.

### Creating a model instance

#### `MediaFile.objects.create(name=None, description=None, creator=None, contribution=None, the_file=None)`

Creates a new file. It examines the content type of the file and creates the appropriate MediaFile instance.

##### Parameters

<dl class="parameters">
    <dt>name: <span class="type">string</span></dt>
        <dd>Title of the file</dd>
    <dt>description: <span class="type">string</span></dt>
        <dd>Long-form caption of the image</dd>
    <dt>creator: <span class="type"><span class="type"><a href="/docs/programming/user.html">User</a></span></dt>
        <dd>User who adds the file</dd>
    <dt>contribution: <span class="type"><span class="type"><a href="/docs/programming/observation.html">Observation</a></span></dt>
        <dd>Observation this file is assigned to</dd>
    <dt>the_file: <span class="type">File</span></dt>
        <dd>File object representing the file.</dd>
</dl>

##### Returns

<dl class="parameters">
    <dt><span class="type">ImageFile</span></dt>
        <dd>if an image was uploaded</dd>
    <dt><span class="type">DocumentFile</span></dt>
        <dd>if a document was uploaded</dd>
    <dt><span class="type">VideoFile</span></dt>
        <dd>if an video was uploaded</dd>
</dl>

##### Raises

<dl class="parameters">
    <dt>FileTypeError</dt>
        <dd>if an unsupported file type was uploaded</dd>
</dl>
