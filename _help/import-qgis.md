---
layout: tutorial
title:  "Import GeoKey data to QGIS"
---

[QGIS](http://www.qgis.org/) is a free and open-source GIS that you can use to analyse data collected with GeoKey and to make maps from your data. QGIS can read various formats, including GeoJSON.

You can [export your data](/extensions/export-create.html) to GeoJSON and then import it into QGIS for further processing. Here's how:

1. Start by adding a new vector layer

    ![Add new vector layer](/img/import/qgis-01.png)

2. Select the file you want to import and click _open_.

    ![Select file to import](/img/import/qgis-02.png)

3. GeoKey exports all data — independent of their geometry type. In QGIS, however, layers have a specific geometry type, e.g. point, line or polygon. If the export contains mixed geometries, you have to select, which geometry types you want to import to create a new layer.

    ![Select geometry type to import](/img/import/qgis-03.png)

4. You can now see the data you imported both in the list of layers and on the map.

    ![Imported data on the map](/img/import/qgis-04.png)
