#!/bin/bash

http -vv --session=./session.json POST :3000/v1/offer/ title="https://www.linkedin.com/jobs/view/3660038168"
