/*

TODO: use the template below to create a game play loop

Player 1 Turn

Check Activated Cards - > Set to state Reset

Check Exhausted Cards -> Set to state Activated

Draw Two Cards

Player Input - > Influence Card Played

Action window -> Player Input (Play/Pass)

Calculate Influence Generation -> Count Face Up/Face Down Cards in Influence Zone

Set Influence Pool -> Equals Influence Generation

Player Input -> Play Site

Do While -> Next Played Card is a Site

Play Site

        "Open Action Window"

    Else "Action Window"

Calculate Sularium Generation -> Count Each Card in Play on the Battlefield

Set Sularium Pool -> Equals Sularium Generation

Player Input -> Play Combatant

Do While -> Next Played Card is a Combatant

Play Combatant

        "Open Action Window"

    Else "Action Window"

Declare Attackers -> Player Input Select all attackers

Open Action Window

Declare Defenders -> Player 2 Input Select all Defenders

Open Action Window

Resolve Attacking Alpha Strike Combatants

Resolve Defending Alpha Strike Sites

Resolve Attacking Combatants

Resolve Defending Sites

Remove Defeated Cards

Action Window

Check Player 1 more than seven cards in Hand Zone

Yes - > Discard down to seven cards

No - > Reset Defense Value of cards in play to their base value +/- any modifiers.

Repeat for Player 2


*/