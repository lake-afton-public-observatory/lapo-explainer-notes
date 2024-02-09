---
title: Neptune
weight: 8
lastmod: "2022-08-21"
reviewer: "Chris Ketron"
notes: ""
---

<script src="/js/whatsup.js"></script>
<script src="/js/utils.js"></script>
<script type="text/javascript">
	var objectName ="Neptune"
	var objectDesc ="Farthest Planet from the Sun<br/>and Windiest in the Solar System"
	var objectImage="neptune.jpg"
</script>
<script type="text/javascript">
	setInterval(function(){
		fetch("../data.json")
			.then(function(response) {
				return response.json();
			})
			.then(function(data) {
				var d=new Date();
				var v=interpolate(data.Neptune.sun_distance,d.valueOf()/1000);
				document.getElementById("dist_sun").innerText=au_to_mi(v).numberFormat(3)+' miles';
				document.getElementById("dist_sun_au").innerText=v.numberFormat(3);
				var v=interpolate(data.Neptune.earth_distance,d.valueOf()/1000);
				document.getElementById("dist_earth").innerText=au_to_mi(v).numberFormat(3)+' miles';
				document.getElementById("dist_earth_light").innerText=au_to_ls(v).timeFormat()+' light-time';
			})
			.catch(function(error) {
				console.log('error: '+error);
			});
		}, 1000);
</script>

<span style='float:right;'><div id=whatsup></div></span>

Information about the planet Neptune.

|                                   |                                         |                                          |
| --------------------------------- | :-------------------------------------: | :--------------------------------------: |
|                                   |             <br/>**Actual**             |        **Compared<br/>to Earth**         |
| **Distance from Sun** (average)   |            2.8 billion miles            |                    30                    |
| **Distance from Sun** (current)   |  <span id="dist_sun">loading...</span>  | <span id="dist_sun_au">loading...</span> |
| **Distance from Earth** (current) | <span id="dist_earth">loading...</span><br /><span id="dist_earth_light">loading...</span> |                    --                    |
| **Revolution Period**             |                165 years                |                    --                    |
| **Rotation Period**               |                16 hours                 |                    --                    |
| **Diameter**                      |              30,700 miles               |                   3.9                    |
| **Mass**                          |                   --                    |                   17.2                   |
| **Surface Gravity**               |                   --                    |                   1.12                   |
| **Temperature** Cloud Tops        |        -162 &deg;C (-260 &deg;F)        |                                          |
| **Density** (gram/cubic cm)       |               1.8 gm/cm3                |                   0.32                   |

### In the telescope

---
<span style='float:right;'>[top](#)</span>

1. Recommended eyepiece: 26mm or 40 mm.

2. Neptune appears like an out-of-focus star in the telescope. None of its moons or rings can be seen through the telescope..

### Neptune Information

---
<span style='float:right;'>[top](#)</span>

1. Neptune was the first planet found by prediction alone.

   a. Astronomers realized Uranus wasn’t moving in its orbit the way it was supposed to move. Independently, Urbain Jean Joseph Le Verrier and John Couch Adams calculated there could be another planet beyond Uranus.

   b. On September 23, 1846, Johann Gottfried Galle and Heinrich Louis d’Arrest took a chance, and looked where this predicted planet was supposed to be. They had no trouble finding Neptune.

2. Neptune has a rocky core surrounded by a liquid mantle of water, methane, and ammonia. Its atmosphere is hydrogen and helium.

3. Neptune’s winds are three times stronger than Jupiter’s and nine times stronger than Earth’s.

4. Although they cannot be seen from Earth, hurricane-like storms similar to those on Jupiter and Saturn are present in Neptune’s atmosphere. The Great Dark Spot is one such storm. (Direct people to photographs in the light trap or exhibit rooms.)

5. Voyager 2 saw this Great Dark Spot in 1989, but when the Hubble Telescope took pictures of Neptune in November, 1994, the Great Dark Spot had disappeared.

6. The Great Dark Spot was about the same size as Earth with winds measured at 1,500 mile per hour, the fastest in the solar system!

7. Currently, there is a new Great Dark Spot on Neptune in its northern hemisphere and it has been named the Northern Great Dark Spot.

8. Neptune emits more energy than it receives from the sun as do Jupiter and Saturn.

9. Neptune has at least 13 moons and six rings, none of which can be seen through the telescope.

   a. The largest, Triton has a diameter of about 1678 miles which makes it one of the larger moons in the solar system.

   b. Triton is one of only two moons in the solar system that has an atmosphere. Saturn’s moon Titan is the other one.

   c. Triton’s also has geysers of liquid nitrogen.

   d. Triton is the only large satellite in the solar system with a retrograde orbit around a planet. This “backwards” orbit may mean the moon formed somewhere else and was captured by Neptune’s gravity.

   e. Triton’s the coldest measured object in the solar system at -235 ºC (-396 ºF).

---
<span style='float:right;'>[top](#)</span>
<br/>
<details>
<summary>References ...</summary>

|   |   |   | 
| ------------------------ | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Item**                 | **Updated** | **Notes**                                                                                                                                                                                                                                |
| Distance                 | 2017-05-04  | <https://solarsystem.nasa.gov/planets/neptune/facts>                                                                                                                                                                                     |
| Revolution Period        | 2017-05-04  | <https://solarsystem.nasa.gov/planets/neptune/facts>                                                                                                                                                                                     |
| Rotation Period          | 2017-05-04  | <https://solarsystem.nasa.gov/planets/neptune/facts>                                                                                                                                                                                     |
| Diameter                 | 2017-05-04  | <https://solarsystem.nasa.gov/planets/neptune/facts>                                                                                                                                                                                     |
| Mass                     | 2017-05-04  | <https://solarsystem.nasa.gov/planets/neptune/facts>                                                                                                                                                                                     |
| Surface Gravity          | 2017-05-04  | <https://solarsystem.nasa.gov/planets/neptune/facts>                                                                                                                                                                                     |
| Temperature (cloud tops) | 2017-05-04  | <https://solarsystem.nasa.gov/planets/neptune/facts>                                                                                                                                                                                     |
| Density                  | 2017-05-04  | <https://solarsystem.nasa.gov/planets/neptune/facts>                                                                                                                                                                                     |
| Other Information        | 2017-05-04  | <https://solarsystem.nasa.gov/planets/neptune/facts><br/><http://www.solarviews.com/eng/neptune.htm><br/>Wind Info: <https://solarsystem.nasa.gov/planets/neptune/basic><br/>Moons: <https://solarsystem.nasa.gov/planets/neptune/moons> |
</details>
