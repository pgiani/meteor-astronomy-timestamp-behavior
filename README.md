# Timestamp behavior for Meteor Astronomy compatible with Redis-oplog

## RedisOplog

A full re-implementation of the Meteor's MongoDB oplog tailing. This time, reactivity is controlled by the app, opening a new world
into building reactive applications, highly scalable chat apps, games, and added reactivity for non-persistent data.

The `timestamp` behavior adds two fields that store information about document's creation and update dates.

A detailed information about behavior can be found [here](http://jagi.github.io/meteor-astronomy/v2#timestamp).
