#! /usr/bin/env python3

import sys as s
import random

LETTERS_l = "abcdefghijklmnopqrstuvwxyz"
LETTERS_u = LETTERS_l.upper()
LETTERS = LETTERS_l+LETTERS_u

def random_name(i):
   return f"worker{i}"
   #return "".join([random.choice(LETTERS) for _ in range(9)])

def random_number():
   return "+212"+"".join([str(random.randint(0, 9)) for _ in range(8)])

def random_mail(name):
   services = ["gmail", "hotmail", "outlook", "laposte"]
   return f"{name}@{random.choice(services)}.com"

def random_list(n, i):
   max = random.randint(1, n-1)
   return list(map(str, random.sample(range(0, n-1), max)))



def gen(n):
    
    lines = []
    for i in range(n-1):
      name = random_name(i)
      a = ",".join(random_list(n, i))
      msg = f"name {name}\nnumber {random_number()}\nmail {random_mail(name)}\nimage /images/img{random.randint(0, 3)}.jpg\nid {i}\nlist {random.randint(0, n-1)}/{a} \n\n"
      lines.append(msg)
    name = random_name(n-1)
    a = ",".join(random_list(n, i))
    lines.append(f"name {name}\nnumber {random_number()}\nmail {random_mail(name)}\nimage /images/img{random.randint(0, 3)}.jpg\nid {n-1}\nlist {random.randint(0, n-1)}/{a}")
    with open("datagen.txt", "w") as f:
       f.writelines(lines)
      

def main():
   gen(int(s.argv[1]))


if __name__ == "__main__":
   main()
