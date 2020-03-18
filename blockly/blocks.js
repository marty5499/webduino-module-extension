Blockly.Blocks['iframe_open'] = {
  init: function() {
    this.appendValueInput("url")
        .setCheck("String")
        .appendField("開啟網頁");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};