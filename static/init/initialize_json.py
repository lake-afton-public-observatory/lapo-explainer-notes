import datetime
import json
import ephem
import pytz
import pathlib
import sys

d = datetime.datetime.now()
d = d.replace(minute=0, second=0, microsecond=0)  # get current hour
objects = dict()
tz = pytz.timezone('America/Chicago')
lapo = ephem.Observer()
lapo.lat, lapo.lon, lapo.elev = '37.62218579135644', '-97.62695789337158', 421


def compute_body_info(body, date):
    body.compute(datetime.datetime.fromtimestamp(date, tz))


start_time = int(d.timestamp()-3600)  # start one hour early, just in case
end_time = int(d.timestamp()+3600*48)  # end 48 hours late, just in case
for body in [ephem.Sun, ephem.Mercury, ephem.Venus, ephem.Moon, ephem.Mars,
             ephem.Jupiter, ephem.Saturn, ephem.Uranus, ephem.Neptune,
             ephem.Pluto]:
    b = body()
    earthdist, sundist = [], []
    for time in range(start_time, end_time, 3600):
        compute_body_info(b, time)
        earthdist.append((time, b.earth_distance))
        if b.name != 'Sun':
            sundist.append((time, b.sun_distance))
    objects[b.name] = {'earth_distance': dict(earthdist)}
    if b.name != 'Sun':
        objects[b.name]['sun_distance'] = dict(sundist)

outfile = pathlib.Path(__file__).parent.joinpath('../object-notes/solar-system/data.json')
if len(sys.argv) > 1:
    outfile = pathlib.Path(sys.argv[1])

path = outfile.resolve()
json.dump(objects, open(path, 'w'), indent=2)
