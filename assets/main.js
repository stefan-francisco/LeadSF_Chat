$(function() {
  var client = ZAFClient.init();
  client.invoke('resize', { width: '100%', height: '180px' });
  showSearchForm();
});

function showSearchForm() {
  var source = $("#search-template").html();
  var template = Handlebars.compile(source);
  $("#content").html(template());
}