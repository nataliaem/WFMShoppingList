for(var i = 0; i < 67; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u51'] = 'center';gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u38'] = 'center';gv_vAlignTable['u32'] = 'center';document.getElementById('u23_img').tabIndex = 0;

u23.style.cursor = 'pointer';
$axure.eventManager.click('u23', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Add_multiple_items.html');

}
});
gv_vAlignTable['u62'] = 'center';gv_vAlignTable['u53'] = 'center';document.getElementById('u1_img').tabIndex = 0;

u1.style.cursor = 'pointer';
$axure.eventManager.click('u1', function(e) {

if (true) {

	MoveWidgetBy('u41', GetNum('-65'), GetNum('0'),'swing',500);

	SetPanelVisibility('u41','hidden','none',500);

	SendToBack("u41");

	MoveWidgetBy('u54', GetNum('-250'), GetNum('0'),'swing',500);

	SetPanelVisibility('u0','hidden','none',500);

	SendToBack("u0");

}
});
gv_vAlignTable['u66'] = 'center';gv_vAlignTable['u30'] = 'center';gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u60'] = 'center';gv_vAlignTable['u34'] = 'center';gv_vAlignTable['u64'] = 'center';gv_vAlignTable['u49'] = 'center';gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u36'] = 'center';gv_vAlignTable['u58'] = 'center';gv_vAlignTable['u2'] = 'center';gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u47'] = 'center';gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u28'] = 'center';gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u26'] = 'center';gv_vAlignTable['u56'] = 'center';gv_vAlignTable['u12'] = 'center';document.getElementById('u9_img').tabIndex = 0;

u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', function(e) {

if (true) {

	MoveWidgetBy('u54', GetNum('250'), GetNum('0'),'swing',1000);

	BringToFront("u0");

	SetPanelVisibility('u0','','none',500);

	MoveWidgetBy('u41', GetNum('65'), GetNum('0'),'swing',500);

	SetPanelVisibility('u41','','none',500);

	BringToFront("u41");

}
});
gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u40'] = 'center';gv_vAlignTable['u14'] = 'center';