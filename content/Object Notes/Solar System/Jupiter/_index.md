---
title: Jupiter
weight: 5
layout: sublist
lastmod: "2022-08-21"
reviewer: "Chris Ketron"
notes: ""
---

<script src="/js/whatsup.js"></script>
<script src="/js/utils.js"></script>
<script type="text/javascript">
	var objectName ="Jupiter"
	var objectDesc ="A Gas Giant<br/>Twice as massive as all the other planets combined"
	var objectImage="jupiter.jpg"
</script>
<script type="text/javascript">
	setInterval(function(){
		fetch("../data.json")
			.then(function(response) {
				return response.json();
			})
			.then(function(data) {
				var d=new Date();
				var v=interpolate(data.Jupiter.sun_distance,d.valueOf()/1000);
				document.getElementById("dist_sun").innerText=au_to_mi(v).numberFormat(3)+' miles';
				document.getElementById("dist_sun_au").innerText=v.numberFormat(3);
				var v=interpolate(data.Jupiter.earth_distance,d.valueOf()/1000);
				document.getElementById("dist_earth").innerText=au_to_mi(v).numberFormat(3)+' miles';
				document.getElementById("dist_earth_light").innerText=au_to_ls(v).timeFormat()+' light-time';
			})
			.catch(function(error) {
				console.log('error: '+error);
			});
		}, 1000);
</script>

<span style='float:right;'><div id=whatsup></div></span>

Information about the planet Jupiter.

|  |  |  |
|---|:--:|:--:|
|  |<br/>**Actual**|**Compared<br/>to Earth**|
|**Distance from Sun** (average)|480 million miles|5.2|
| **Distance from Sun** (current)   |  <span id="dist_sun">loading...</span>  | <span id="dist_sun_au">loading...</span> |
| **Distance from Earth** (current) | <span id="dist_earth">loading...</span><br /><span id="dist_earth_light">loading...</span> |                    --                    |
|**Revolution Period**|11.9 Earth years|--|
|**Rotation Period**|9 hr. 50 min.|--|
|**Diameter** - equatorial|89,000 miles|11.3|
|**Diameter** - polar|83,000 miles|10.5|
|**Mass**|--|318|
|**Surface Gravity**|--|2.4|
|**Escape Velocity**|134,664 mph|5.38|
|**Average Cloud Temperature**|-121 &deg;C (-186 &deg;F)|--|
|**Density** (gram/cubic cm)|1.33 gm/cm3|0.24|
|  |  |  |

### In the telescope ...

---
<span style='float:right;'>[top](#)</span>

1.	Recommended eyepiece: 26mm or 40 mm.

1.	Jupiter will appear as a bright white ball.  If it is too bright, use the mask that fits over the front of the telescope.

1.	Jupiter will appear as a bright white ball with brown belts.   The different colors are caused by different layers of gas in Jupiter’s atmosphere.

1.  Jupiter trail's only Saturn (which may have as many as 82 moons) as the planet with the most moons: Jupiter has 53 named moons and 26 others awaiting confirmation and official names; for a combined possible total of 79 moons.

1.	Up to four of Jupiter’s 79 moons can also be seen.  These four moons, which lie in a plane, are referred to as the Galilean moons.

### Jupiter Information

---
<span style='float:right;'>[top](#)</span>

1.	Jupiter is a large ball of hydrogen and helium gas.  This is the same material that makes up the Sun.  In fact, if Jupiter had 100 times more material (hydrogen and helium) it would have become a star.

2.	Jupiter has three cloud layers.

    a.	The top layer is white, composed of ammonia which freezes at the low temperatures of Jupiter’s upper atmosphere (-193 deg. F).

    b.	The middle layer is brown (ammonium hydrosulfide), and can only be seen through holes in the top white cloud layer.  The brown belts are really high pressure regions in the atmosphere - similar to high pressure regions here on Earth.

    c.	The lowest layer is blue (water).  Since the ability to see the blue clouds requires holes in both the white and brown cloud layers at the same place, they are rarely seen.

3.	The clouds are stretched into bands because Jupiter rotates once every 9 hours and 50 minutes.  This rapid rotation along with Jupiter’s larger size means the cloud tops on Jupiter are moving over 28,000 miles per hour compared with only 1,000 miles per hour here on Earth.

4.	The Great Red Spot has not been prominent for the last few years.

    a.	It is a cloud feature two to three times the diameter of Earth.

    b.	It is similar to a hurricane, except it is an area of high pressure instead of low pressure.

    c.	The red spot extends about 10km (6 miles) above the white layer of clouds.

5.	Jupiter has a very strong magnetic field.  Charged particles are trapped by the field near to the planet, creating a deadly radiation environment (for both humans and electronic equipment on spacecraft). 

6.	Jupiter – like the other gas giant planets Saturn, Uranus, and Neptune – has a system of rings.  However, they are very thin and dim, and cannot be seen from Earth.
a.	There is a system of three rings - The “Halo” begins at about 100,000 km from Jupiter’s center and extends to 122,800 km.; The “Main” begins at 122,800 km and extends to 129,200 km; and the “Gossamer” begins at 129,200 km and extends to 214,200 km.

    b.	Two small moons that lie inside the circle of the “Main” ring may serve as the source of the dust that makes up the rings. 

    c.	The dust particles that make up the rings is thought to be composed of dust particles about the size of cigarette smoke particles. 

7.	Jupiter has 53 confirmed moons and scientist believe there are 26 more provisional ones for a total of 79 moons… is has so many that it is almost a mini solar system. (as of 2019-10-10)

8.	Jupiter has northern lights, too!

    a.	Aurora on Earth are caused by charged particles coming from the Sun interacting with our magnetic field.

    b.	Aurora on Jupiter are caused by charged particles ejected from volcanoes on Jupiter’s moon, Io, which interact with Jupiter’s magnetic field.

9.	The first reasonably accurate determination of the speed of light was made in 1675 by Olaf Roemer, a Danish astronomer, who worked at the Paris Observatory.  He made this determination by observing eclipses of one of Jupiter’s moons.

10.	It takes 43 minutes for sunlight to travel from the Sun to Jupiter.

---
<span style='float:right;'>[top](#)</span>
<br/>
<details>
<summary>References ...</summary>

|   |   |   |
|---|---|---|
|**Item**|**Updated**|**Notes**|
|Distance from Sun (average)|2017-04-06|http://solarsystem.nasa.gov/planets/profile.cfm?Object=Jupiter|
|Revolution Period|2017-04-06|solarsystem.nasa.gov|
|Rotation Period|2017-04-06|solarsystem.nasa.gov|
|Equatorial Diameter|2017-04-06|solarsystem.nasa.gov
|Polar Diameter|2017-04-06|https://nssdc.gsfc.nasa.gov/planetary/factsheet/jupiterfact.html|
|Mass|2017-04-06|solarsystem.nasa.gov
|Surface Gravity|2017-04-06|solarsystem.nasa.gov|
|Avg. Cloud Temperature|2017-04-06|http://www.solarviews.com/eng/jupiter.htm|
|Density|2017-04-06|solarsystem.nasa.gov|
|Other Information|2017-04-06|Hordes of info<br/>@solarsystem.nasa.gov<br/>https://nssdc.gsfc.nasa.gov/planetary/factsheet/jupiterfact.html<br/><br/>Speed of light info from<br/>http://spaceflightnow.com/news/n0301/09gravity/<br/><br/>Additional ring info from<br/>http://sse.jpl.nasa.gov/planets/|
|   |   |   |

---
<span style='float:right;'>[top](#)</span>
<br/>
|   |   |   |
|---|---|---|
|**Item**|**Updated**|**Notes**|
|Distance|2017-04-06|http://solarviews.com/eng/jupiter.htm|
|Compared to E/M|2017-04-06|http://solarviews.com/eng/jupiter.htm|
|Revolution Period|2017-04-06|http://solarviews.com/eng/jupiter.htm|
|Diameter|2017-04-06|http://solarviews.com/eng/jupiter.htm|
|Diameter compared to Moon|2017-04-06|http://solarviews.com/eng/jupiter.htm|
|Other Information|2017-04-06|Hordes more info @<br/>http://solarviews.com/eng/jupiter.htm<br/>and https://solarsystem.nasa.gov/planets/jupiter/moons|
|Ganymede oceans,<br/> Galileo spacecraft<br/>observation of<br/>volcanoes and<br/>corrected amount<br/>of volcanoes spew.|2017-04-06|https://www.nasa.gov/press/2015/march/nasa-s-hubble-observations-suggest-underground-ocean-on-jupiters-largest-moon<br/>and<br/>https://www.jpl.nasa.gov/releases/98/iohot.html|
|Number of Moons|2019-10-10|https://solarsystem.nasa.gov/moons/jupiter-moons/overview/?page=0&per_page=40&order=name+asc&search=&placeholder=Enter+moon+name&condition_1=9%3Aparent_id&condition_2=moon%3Abody_type%3Ailike <br/>https://carnegiescience.edu/news/dozen-new-moons-jupiter-discovered-including-one-%E2%80%9Coddball%E2%80%9D|
|   |   |   |
</details>