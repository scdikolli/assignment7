$(document).ready(function(){
  console.log('scripts loaded');

  var html = '';
  var url = '../NEH_Grants2010s.xml';
  var grants;
  var YearAwarded = '';
  var OriginalAmount = '';
  var ProjectTitle = '';
  var ToSupport = '';


  $.ajax({
    type:'GET',
    url: url,
    data: grants,
    dataType: 'xml',
    async: true,
    success: function(grants){
      console.log(grants);
      $(grants).find('Grant').each(function(){
        YearAwarded = $(this).find('YearAwarded').text();
        ProjectTitle = $(this).find('ProjectTitle').text();
        OriginalAmount = $(this).find('OriginalAmount').text();
        ToSupport = $(this).find('ToSupport').text();
        if(ToSupport == 'None'){
          html += '<tr id="none"></tr>';
        }
        else{
          html += '<tr>';
          html +=  '<td>' + ProjectTitle + '</td>';
          html +=  '<td>' + YearAwarded + '</td>';
          html +=  '<td>' + OriginalAmount + '</td>';
          html +=  '<td>' + ToSupport + '</td>';
          html += '</tr>';
        }
      });
      $('#results').append(html);
    }
  });

/*
1) Build an HTML table using an AJAX call on the provided XML file (NEH_Grants2010s.xml).
   The XML data shows all of the grants awarded by the National Endowment for the Humanities since 2008.
2) The table should have four columns:
    The Project Title, Year Awarded, Original Amount, and grant description (ToSupport)
3) You will notice that the table is a bit messy; some of the grants have no descriptions, leaving large
   blank spaces with just 'None.' Clean this up with conditional logic in your code.
   If the grant has no description, do not include it in the table.
*/


});
