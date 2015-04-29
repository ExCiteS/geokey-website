---
layout: internal-docs
title:  "Comment"
---
Comments are used to discuss issues with observations. Users can comment on observations and reply to other comments.

### Attributes

Parameter              | Type                     | Description
-----------------------|--------------------------|-----------------------------------------------
id                     | integer                  | Identifies the comment in the database.
text                   | string                   | The actual comment
created_at             | datetime                 | Date and time when the comment was added.
creator                | [User](/docs/internal/user.html) | User who created the comment.
commentto              | [Observation](/docs/internal/observation.html) | Observation this comment refers to.
responsto              | [Comment](/docs/internal/comment.html)         | Optional. Another comment this comment responds to.
status                 | string                   | Status of the comment. Must be one of `active`, `deleted`.
review_status          | string                   | Optional. Must be one of `open` or `resolved`.

### Methods

#### `delete()`

Deletes the comment by setting its status to `deleted`.
