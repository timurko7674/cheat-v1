let player_name : TargetSelector = null
player.onChat("/cheatv1set", function on_on_chat() {
    
    player_name = mobs.target(LOCAL_PLAYER)
    gameplay.xp(10000, player_name)
    mobs.give(player_name, GRASS, 1)
    //  Give best Netherite armor
    mobs.give(player_name, NETHERITE_HELMET, 1)
    mobs.give(player_name, NETHERITE_CHESTPLATE, 1)
    mobs.give(player_name, NETHERITE_LEGGINGS, 1)
    mobs.give(player_name, NETHERITE_BOOTS, 1)
    //  Give best Netherite weapons
    mobs.give(player_name, NETHERITE_SWORD, 1)
    mobs.give(player_name, NETHERITE_PICKAXE, 1)
    mobs.give(player_name, NETHERITE_AXE, 1)
    mobs.give(player_name, NETHERITE_SHOVEL, 1)
    mobs.give(player_name, NETHERITE_HOE, 1)
})
