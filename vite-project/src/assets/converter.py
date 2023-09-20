#! /usr/bin/env python3




import json


filename = "datagen.txt"


ITEMS = [{}]

with open(filename) as f:
    for line in f:
        if line == "\n":
            ITEMS.append({})
        else:
            dict1 = ITEMS[-1]
            key, assign = line.strip().split(None, 1)
            dict1[key] = assign



with open("DataSample.json", "w") as out_file:
    json.dump(ITEMS, out_file, indent=2)