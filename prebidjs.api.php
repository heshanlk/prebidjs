<?php

/**
 * @file
 * Documents API functions for prebidjs module.
 */

/**
 * Implements hook_prebidjs_bidder_adapters_info().
 */
function hook_prebidjs_bidder_adapters_info(){
  $bidder_adapters = array();
  $bidder_adapters['appnexus'] = array(
    'name' => 'AppNexus',
    'settings' => [
      'key' => 'label',
      'key' => 'label'
    ]
  );
  return $bidder_adapters;
}