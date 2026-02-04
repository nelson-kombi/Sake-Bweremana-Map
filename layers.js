var wms_layers = [];


        var lyr_ESRIWorldTopo_0 = new ol.layer.Tile({
            'title': 'ESRI World Topo',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Buildings_sakebwbuildings__gis_osm_buildings_a_free_1_1 = new ol.format.GeoJSON();
var features_Buildings_sakebwbuildings__gis_osm_buildings_a_free_1_1 = format_Buildings_sakebwbuildings__gis_osm_buildings_a_free_1_1.readFeatures(json_Buildings_sakebwbuildings__gis_osm_buildings_a_free_1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildings_sakebwbuildings__gis_osm_buildings_a_free_1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildings_sakebwbuildings__gis_osm_buildings_a_free_1_1.addFeatures(features_Buildings_sakebwbuildings__gis_osm_buildings_a_free_1_1);
var lyr_Buildings_sakebwbuildings__gis_osm_buildings_a_free_1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buildings_sakebwbuildings__gis_osm_buildings_a_free_1_1, 
                style: style_Buildings_sakebwbuildings__gis_osm_buildings_a_free_1_1,
                popuplayertitle: 'Buildings_sake-bw — buildings__gis_osm_buildings_a_free_1',
                interactive: true,
                title: '<img src="styles/legend/Buildings_sakebwbuildings__gis_osm_buildings_a_free_1_1.png" /> Buildings_sake-bw — buildings__gis_osm_buildings_a_free_1'
            });
var format_Sourcessourcestxt_2 = new ol.format.GeoJSON();
var features_Sourcessourcestxt_2 = format_Sourcessourcestxt_2.readFeatures(json_Sourcessourcestxt_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sourcessourcestxt_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sourcessourcestxt_2.addFeatures(features_Sourcessourcestxt_2);
var lyr_Sourcessourcestxt_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sourcessourcestxt_2, 
                style: style_Sourcessourcestxt_2,
                popuplayertitle: 'Sources — sourcestxt',
                interactive: true,
                title: '<img src="styles/legend/Sourcessourcestxt_2.png" /> Sources — sourcestxt'
            });
var format_Sitesdinterventionduprogramme_3 = new ol.format.GeoJSON();
var features_Sitesdinterventionduprogramme_3 = format_Sitesdinterventionduprogramme_3.readFeatures(json_Sitesdinterventionduprogramme_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sitesdinterventionduprogramme_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sitesdinterventionduprogramme_3.addFeatures(features_Sitesdinterventionduprogramme_3);
var lyr_Sitesdinterventionduprogramme_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sitesdinterventionduprogramme_3, 
                style: style_Sitesdinterventionduprogramme_3,
                popuplayertitle: 'Sites d\'intervention du programme',
                interactive: true,
                title: '<img src="styles/legend/Sitesdinterventionduprogramme_3.png" /> Sites d\'intervention du programme'
            });

lyr_ESRIWorldTopo_0.setVisible(true);lyr_Buildings_sakebwbuildings__gis_osm_buildings_a_free_1_1.setVisible(true);lyr_Sourcessourcestxt_2.setVisible(true);lyr_Sitesdinterventionduprogramme_3.setVisible(true);
var layersList = [lyr_ESRIWorldTopo_0,lyr_Buildings_sakebwbuildings__gis_osm_buildings_a_free_1_1,lyr_Sourcessourcestxt_2,lyr_Sitesdinterventionduprogramme_3];
lyr_Buildings_sakebwbuildings__gis_osm_buildings_a_free_1_1.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', });
lyr_Sourcessourcestxt_2.set('fieldAliases', {'fid': 'fid', 'Nom': 'Nom', 'Longitude': 'Longitude', 'latitude': 'latitude', 'Altitude': 'Altitude', 'xcoord': 'xcoord', 'ycoord': 'ycoord', });
lyr_Sitesdinterventionduprogramme_3.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', });
lyr_Buildings_sakebwbuildings__gis_osm_buildings_a_free_1_1.set('fieldImages', {'fid': '', 'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'type': '', });
lyr_Sourcessourcestxt_2.set('fieldImages', {'fid': 'TextEdit', 'Nom': 'TextEdit', 'Longitude': 'TextEdit', 'latitude': 'TextEdit', 'Altitude': 'TextEdit', 'xcoord': 'TextEdit', 'ycoord': 'TextEdit', });
lyr_Sitesdinterventionduprogramme_3.set('fieldImages', {'id': 'TextEdit', 'Nom': 'TextEdit', });
lyr_Buildings_sakebwbuildings__gis_osm_buildings_a_free_1_1.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_Sourcessourcestxt_2.set('fieldLabels', {'fid': 'no label', 'Nom': 'no label', 'Longitude': 'no label', 'latitude': 'no label', 'Altitude': 'no label', 'xcoord': 'no label', 'ycoord': 'no label', });
lyr_Sitesdinterventionduprogramme_3.set('fieldLabels', {'id': 'no label', 'Nom': 'no label', });
lyr_Sitesdinterventionduprogramme_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});