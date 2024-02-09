---
title: Moon
weight: 1
layout: sublist
lastmod: "2022-08-14"
reviewer: "Chris Ketron"
notes: ""
---

<script src="/js/whatsup.js"></script>
<script src="/js/utils.js"></script>
<script type="text/javascript">
	var objectName ="The Moon"
    var objectDesc ="Earth's Satellite<br/>1 Lunar Day<br/><h6>706 frames, played at 24 fps = 29.45 seconds = ~1 lunar day"
	//var objectDesc ="Earth's Satellite"
    // var objectImage="moon.png" // Moon Phase Graphic
    // var objectImage="moon.jpg" // Moon
    var objectImage="lro-lunarday.gif" // new LRO animated moon
</script>
<script type="text/javascript">
	setInterval(function(){
		fetch("../data.json")
			.then(function(response) {
				return response.json();
			})
			.then(function(data) {
				var d=new Date();
				var v=interpolate(data.Moon.earth_distance,d.valueOf()/1000);
				document.getElementById("dist_earth").innerText=au_to_mi(v).numberFormat(3)+' miles';
				document.getElementById("dist_earth_light").innerText=au_to_ls(v).timeFormat()+' light-time';
			})
			.catch(function(error) {
				console.log('error: '+error);
			});
		}, 1000);
</script>

<span style='float:right;'><div id=whatsup></div></span>

|                                    |                                         |                            |
| ---------------------------------- | :-------------------------------------: | :------------------------: |
|                                    |             <br/>**Actual**             | **Compared <br/>to Earth** |
| **Distance from Earth** (Average)  |              239,000 miles              |                            |
| **Distance from Earth** (Closest)  |              221,000 miles              |                            |
| **Distance from Earth** (Farthest) |              253,000 miles              |                            |
| **Distance from Earth** (Current)  | <span id="dist_earth">loading...</span><br /><span id="dist_earth_light">loading...</span> |             --             |
| **Revolution Period**              |                27.3 days                |                            |
| **Time from New Moon to New Moon** |                29.5 days                |             --             |
| **Diameter**                       |               2160 miles                |         1/4 (0.25)         |
| **Mass**                           |                                         |        1/81 (0.012)        |
| **Surface Gravity**                |           1.6 m/s<sup>2</sup>           |         1/6 (0.17)         |
| **Temperature** (Sunlight)         |         110 &deg;C (212 &deg;F)         |                            |
| **Temperature** (Shadow/Dark)      |        -180 &deg;C (-290 &deg;F)        |                            |
| **Density** (gram/cubic cm)        |         3.34 gm/cm<sup>3</sup>          |            0.61            |

### In the telescope ...

---
<span style='float:right;'>[top](#)</span>

1.  Recommended eyepiece:  26mm or 40mm

2.  People often wonder why the moon map is upside down. While they are looking through the finder, tell them to notice which side of the moon is light and which is dark. Have them do the same with their naked eye and they should realize that telescopes turn images upside down.

### Lunar Features by Phase

---
<span style='float:right;'>[top](#)</span>

|                                                           |            |
| :-------------------------------------------------------- | ---------: |
| Waxing Crescent&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | (1-5 days) |
| <ul><li>[Mare Crisium](../moon-mare#mare-crisium)</li><li>[Altai Scarp](../moon-mare#altai-scarp)</li><li>[Serpentine Ridge](moon-mare#serpentine-ridge)</li></ul> |    |
| First Quarter&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | (6-9 days old) |
| <ul><li>[Mare Fecunditatis](../moon-mare#mare-fecunditatis)</li><li>[Straight Wall](../moon-mare#straight-wall)</li></ul>|   |
| Waxing Gibbous | (10-13 days old) |
|                |                  |
| Full Moon&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | (14-15 days old) |
|                                                                 |                  |
| Waning Gibbous | (16-19 days old) |
|                |                  |
| Last Quarter&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | (20-24 days old) |
|                                                              |                  |	
| Waning Crescent | (25-29 days old) |
|                 |                  |

---
<span style='float:right;'>[top](#)</span>
<br/>
<details>
<summary>References ...</summary>

|   |   |   | 
| ------------------------------------------------------- | ---------- | -------------------------------------------------- |
| -- none --                                              |            |                                                    |
</details>
