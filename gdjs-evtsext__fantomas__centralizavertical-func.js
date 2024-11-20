
if (typeof gdjs.evtsExt__Fantomas__CentralizaVertical !== "undefined") {
  gdjs.evtsExt__Fantomas__CentralizaVertical.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Fantomas__CentralizaVertical = {};
gdjs.evtsExt__Fantomas__CentralizaVertical.GDObjetoObjects1= [];
gdjs.evtsExt__Fantomas__CentralizaVertical.GDObjetoObjects2= [];


gdjs.evtsExt__Fantomas__CentralizaVertical.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Objeto"), gdjs.evtsExt__Fantomas__CentralizaVertical.GDObjetoObjects1);
{for(var i = 0, len = gdjs.evtsExt__Fantomas__CentralizaVertical.GDObjetoObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Fantomas__CentralizaVertical.GDObjetoObjects1[i].setCenterYInScene(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}}

}


};

gdjs.evtsExt__Fantomas__CentralizaVertical.func = function(runtimeScene, Objeto, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Objeto": Objeto
},
  _objectArraysMap: {
"Objeto": gdjs.objectsListsToArray(Objeto)
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

gdjs.evtsExt__Fantomas__CentralizaVertical.GDObjetoObjects1.length = 0;
gdjs.evtsExt__Fantomas__CentralizaVertical.GDObjetoObjects2.length = 0;

gdjs.evtsExt__Fantomas__CentralizaVertical.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Fantomas__CentralizaVertical.GDObjetoObjects1.length = 0;
gdjs.evtsExt__Fantomas__CentralizaVertical.GDObjetoObjects2.length = 0;


return;
}

gdjs.evtsExt__Fantomas__CentralizaVertical.registeredGdjsCallbacks = [];