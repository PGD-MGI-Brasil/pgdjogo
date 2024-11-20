
if (typeof gdjs.evtsExt__Fantomas__CentralizaTela !== "undefined") {
  gdjs.evtsExt__Fantomas__CentralizaTela.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Fantomas__CentralizaTela = {};
gdjs.evtsExt__Fantomas__CentralizaTela.GDObjetoObjects1= [];
gdjs.evtsExt__Fantomas__CentralizaTela.GDObjetoObjects2= [];


gdjs.evtsExt__Fantomas__CentralizaTela.mapOfGDgdjs_9546evtsExt_9595_9595Fantomas_9595_9595CentralizaTela_9546GDObjetoObjects1Objects = Hashtable.newFrom({"Objeto": gdjs.evtsExt__Fantomas__CentralizaTela.GDObjetoObjects1});
gdjs.evtsExt__Fantomas__CentralizaTela.mapOfGDgdjs_9546evtsExt_9595_9595Fantomas_9595_9595CentralizaTela_9546GDObjetoObjects1Objects = Hashtable.newFrom({"Objeto": gdjs.evtsExt__Fantomas__CentralizaTela.GDObjetoObjects1});
gdjs.evtsExt__Fantomas__CentralizaTela.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Objeto"), gdjs.evtsExt__Fantomas__CentralizaTela.GDObjetoObjects1);
{gdjs.evtsExt__Fantomas__CentralizaHorizontal.func(runtimeScene, gdjs.evtsExt__Fantomas__CentralizaTela.mapOfGDgdjs_9546evtsExt_9595_9595Fantomas_9595_9595CentralizaTela_9546GDObjetoObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__Fantomas__CentralizaVertical.func(runtimeScene, gdjs.evtsExt__Fantomas__CentralizaTela.mapOfGDgdjs_9546evtsExt_9595_9595Fantomas_9595_9595CentralizaTela_9546GDObjetoObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.evtsExt__Fantomas__CentralizaTela.func = function(runtimeScene, Objeto, parentEventsFunctionContext) {
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

gdjs.evtsExt__Fantomas__CentralizaTela.GDObjetoObjects1.length = 0;
gdjs.evtsExt__Fantomas__CentralizaTela.GDObjetoObjects2.length = 0;

gdjs.evtsExt__Fantomas__CentralizaTela.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Fantomas__CentralizaTela.GDObjetoObjects1.length = 0;
gdjs.evtsExt__Fantomas__CentralizaTela.GDObjetoObjects2.length = 0;


return;
}

gdjs.evtsExt__Fantomas__CentralizaTela.registeredGdjsCallbacks = [];