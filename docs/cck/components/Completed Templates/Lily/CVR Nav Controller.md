
# Component Name:

CVR Nav Controller

# Description Overview:

This component is used to direct a nav mesh agent to a target.

# Functionality:

**Nav Mesh Agent** (Scene Reference, Nav Mesh Agent)

- The nav mesh agent to be controlled

**Nav Target List** (Reorderable, expandable list)

- **Element** (Scene Reference, transform)
	- Selects transforms for the nav mesh agent to target.

**Nav Target Index** (Integer)

- Selects the element in the Nav Target List based on its corresponding number.

**Patrol Points** (Reorderable, expandable list)

- **Element** (Scene Reference, transform)
	- Selects transforms for the nav mesh agent to use as patrol points.

**Patrol Point Index** (Integer)

- Selects the next patrol point to use from the Patrol Points list.

**Patrol Point Check Distance** (Float)

- The distance the nav mesh agent must be from its target for it to count as completed.

**Patrol Enabled** (Bool)

- If checked, patrols around instead of moving to target.
# Common Usecases

NPC's, Followers.

# Notes

