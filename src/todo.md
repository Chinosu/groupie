# TODO

### 1. Optimize `AvailabilityManager`
    - Maybe: record availabilities using an array of days and semi-hours
    - Reduce the time complexity of `calculateGroupAvailability` by caching results as we go
    - Support modifying and deleting people

### 2. Overhaul/rethink
Maybe we should instead maintain a grid of timeslots where each timeslot is a list of names. This may be more compatible with the frontend.
