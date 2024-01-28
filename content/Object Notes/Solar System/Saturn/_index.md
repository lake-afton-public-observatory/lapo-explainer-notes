---
title: Saturn
weight: 6
layout: sublist
lastmod: "2022-08-21"
reviewer: "Chris Ketron"
notes: ""
---

<script src="/notes/js/whatsup.js"></script>
<script src="/notes/js/utils.js"></script>
<script type="text/javascript">
	var objectName ="Saturn"
	var objectDesc ="The Ringed Planet"
	var objectImage="saturn.jpg"
</script>
<script type="text/javascript">
	setInterval(function(){
		fetch("../data.json")
			.then(function(response) {
				return response.json();
			})
			.then(function(data) {
				var d=new Date();
				var v=interpolate(data.Saturn.sun_distance,d.valueOf()/1000);
				document.getElementById("dist_sun").innerText=au_to_mi(v).numberFormat(3)+' miles';
				document.getElementById("dist_sun_au").innerText=v.numberFormat(3);
				var v=interpolate(data.Saturn.earth_distance,d.valueOf()/1000);
				document.getElementById("dist_earth").innerText=au_to_mi(v).numberFormat(3)+' miles';
				document.getElementById("dist_earth_light").innerText=au_to_ls(v).timeFormat()+' light-time';
			})
			.catch(function(error) {
				console.log('error: '+error);
			});
		}, 1000);
</script>

<span style='float:right;'><div id=whatsup></div></span>

Information about the planet Saturn.

|  |  |  |
|---|:--:|:--:|
|  |<br/>**Actual**|**Compared<br/>to Earth**|
|**Distance from Sun** (average)| 887 million miles | 9.5 |
| **Distance from Sun** (current)   |  <span id="dist_sun">loading...</span>  | <span id="dist_sun_au">loading...</span> |
| **Distance from Earth** (current) | <span id="dist_earth">loading...</span><br /><span id="dist_earth_light">loading...</span> |                    --                    |
|**Revolution Period**| 29.5 Earth years | -- |
|**Rotation Period**| 10 hours 39 minutes | -- |
|**Diameter** equatorial| 72,366 miles | 9 |
|**Diameter** polar| 67,560 miles | 8.4 |
|**Mass**| -- | 95 |
|**Surface Gravity**| -- | 0.91 |
|**Temperature** Cloud Tops| -125 &deg;C (-190 &deg;F)|  |
|**Density** (gram/cubic cm)|0.70 gm/cm3| 0.32 0.13|

### In the telescope

---
<span style='float:right;'>[top](#)</span>

1.	Recommended eyepiece: 26mm or 40 mm.

2.	Saturn will appear as a yellowish ball with a ring around it.
   
3.	A dark cloud feature in Saturn’s atmosphere can often be seen.
   
4.	The dark line visible within the rings is called Cassini’s division.  It separates two of the major rings as seen from Earth.
   
5.	Up to four of Saturn’s moons can usually be seen with the telescope.  Sometimes a fifth moon can be seen.  The brightest of the five is Titan.

### Saturn Information

---
<span style='float:right;'>[top](#)</span>

1.	Saturn is the farthest planet known to ancient stargazers.  It was first seen through a telescope by Galileo Galilei in 1610.  His telescope wasn’t nearly as nice as telescopes today, so he described seeing bulging “cup handles” (the rings).
 
2.	Saturn is the second largest planet in the solar system.

3.	Saturn is a large ball of hydrogen and helium gas, the same stuff as in our sun.  If Saturn had at least 300 times more of this material, Saturn might have become a star.

4.	It is difficult to see any cloud features on Saturn because the cloud layers are spread out in depth.  This means the lower layers are obscured by the upper ones.  You should be able to see one band in the telescope.

5.	Winds in Saturn’s upper atmosphere reach 1,100 miles per hour.  (Hurricane force winds on Earth only reach about 240 miles per hour.)

6.	Saturn is so large for the amount of matter it contains that it would float in a bowl of water.  Compare this to the moon which is a piece of rock.

7.	Saturn has a solid rocky core that is about two to three times the size of Earth.

8.	Like many of the other gas planets, Saturn is differentiating (probably due to helium rain-out in the interior).  As a result it emits more energy than it receives from the sun.

9.	Saturn has at least 53 moons and another 29 possible moons have been found, bringing the potential total up to 82 moons - the most of any planet in the Solar System.

	a.	Saturn’s largest moon, Titan, is larger than the planet Mercury. It is about 40% the size of Earth

	b.	Titan is one of only two moons in the solar system with an atmosphere.  Neptune’s moon Triton is the other one.

10.	Saturn has a strong magnetic field that causes abundant auroras and radio emissions.

---
<span style='float:right;'>[top](#)</span>
<br/>
<details>
<summary>References ...</summary>

|   |   |   |
|---|---|---|
|**Item**|**Updated**|**Notes**|
|Distance|2017-05-04|<https://solarsystem.nasa.gov/planets/saturn/facts>|
|Revolution|2017-05-04|<https://solarsystem.nasa.gov/planets/saturn/facts>|
|Rotation|2017-05-04|<https://solarsystem.nasa.gov/planets/saturn/facts>|
|Diameter - Equatorial|2017-05-04|<https://solarsystem.nasa.gov/planets/saturn/facts>|
|Diameter - Polar| -- | -- |
|Mass|2017-05-04|<https://solarsystem.nasa.gov/planets/saturn/facts>|
|Surface Gravity|2017-05-04|<https://solarsystem.nasa.gov/planets/saturn/facts>|
|Avg. Cloud Temperature|2017-05-04|<https://solarsystem.nasa.gov/planets/saturn/facts><br/><http://www.solarviews.com/eng/saturn.htm>|
|Density|2017-05-04|<https://solarsystem.nasa.gov/planets/saturn/facts>|
|Other Information|2017-05-04|<https://solarsystem.nasa.gov/planets/saturn/facts><br/>Wind Info and contraction Source: ”Cosmic Persepective“ 2nd ed.|
</details>
