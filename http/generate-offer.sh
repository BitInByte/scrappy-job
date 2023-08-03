#!/bin/bash

http -vv --session=./session.json GET :3000/v1/offer/ url="https://www.linkedin.com/jobs/view/3660038168"
# http -vv --session=./session.json GET :3000/v1/offer/"https://www.linkedin.com/jobs/view/3660038168"
