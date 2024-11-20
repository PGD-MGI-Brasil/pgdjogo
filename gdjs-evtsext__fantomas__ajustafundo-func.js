
if (typeof gdjs.evtsExt__Fantomas__AjustaFundo !== "undefined") {
  gdjs.evtsExt__Fantomas__AjustaFundo.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Fantomas__AjustaFundo = {};
gdjs.evtsExt__Fantomas__AjustaFundo.GDFundoObjects1= [];
gdjs.evtsExt__Fantomas__AjustaFundo.GDFundoObjects2= [];


gdjs.evtsExt__Fantomas__AjustaFundo.mapOfEmptyGDFundoObjects = Hashtable.newFrom({"Fundo": []});
gdjs.evtsExt__Fantomas__AjustaFundo.mapOfGDgdjs_9546evtsExt_9595_9595Fantomas_9595_9595AjustaFundo_9546GDFundoObjects1Objects = Hashtable.newFrom({"Fundo": gdjs.evtsExt__Fantomas__AjustaFundo.GDFundoObjects1});
gdjs.evtsExt__Fantomas__AjustaFundo.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Fantomas__AjustaFundo.mapOfEmptyGDFundoObjects) == 0;
if (isConditionTrue_0) {
gdjs.evtsExt__Fantomas__AjustaFundo.GDFundoObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Fantomas__AjustaFundo.mapOfGDgdjs_9546evtsExt_9595_9595Fantomas_9595_9595AjustaFundo_9546GDFundoObjects1Objects, 0, 0, "Camada Base");
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Fundo"), gdjs.evtsExt__Fantomas__AjustaFundo.GDFundoObjects1);
{for(var i = 0, len = gdjs.evtsExt__Fantomas__AjustaFundo.GDFundoObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Fantomas__AjustaFundo.GDFundoObjects1[i].setLayer("Camada base");
}
}{for(var i = 0, len = gdjs.evtsExt__Fantomas__AjustaFundo.GDFundoObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Fantomas__AjustaFundo.GDFundoObjects1[i].setZOrder(-(1));
}
}{for(var i = 0, len = gdjs.evtsExt__Fantomas__AjustaFundo.GDFundoObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Fantomas__AjustaFundo.GDFundoObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setSize(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene), gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}{for(var i = 0, len = gdjs.evtsExt__Fantomas__AjustaFundo.GDFundoObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Fantomas__AjustaFundo.GDFundoObjects1[i].setPosition(0,0);
}
}}

}


};

gdjs.evtsExt__Fantomas__AjustaFundo.func = function(runtimeScene, Fundo, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Fundo": Fundo
},
  _objectArraysMap: {
"Fundo": gdjs.objectsListsToArray(Fundo)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Fantomas"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Fantomas"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Fantomas__AjustaFundo.GDFundoObjects1.length = 0;
gdjs.evtsExt__Fantomas__AjustaFundo.GDFundoObjects2.length = 0;

gdjs.evtsExt__Fantomas__AjustaFundo.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Fantomas__AjustaFundo.GDFundoObjects1.length = 0;
gdjs.evtsExt__Fantomas__AjustaFundo.GDFundoObjects2.length = 0;


return;
}

gdjs.evtsExt__Fantomas__AjustaFundo.registeredGdjsCallbacks = [];