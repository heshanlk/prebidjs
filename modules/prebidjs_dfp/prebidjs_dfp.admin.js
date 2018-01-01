(function ($) {

/**
 * Custom summary for the module vertical tab.
 */
Drupal.behaviors.exportablePrebidjsDfp = {
  attach: function (context) {
    $('fieldset#edit-prebidjs-dfp-settings', context).drupalSetSummary(function (context) {
      var summary = '';
      $('#edit-bidder-adapters input[type="checkbox"]', context).each(function (context) {
        if($(this).prop('checked')){
          var name = Drupal.checkPlain($('label[for="'+$(this).attr('id')+'"]').text());
          if (name != '') {
            summary += name + '<br/>'
          }
        }
      });
      return summary;
    });
  }
};

})(jQuery);