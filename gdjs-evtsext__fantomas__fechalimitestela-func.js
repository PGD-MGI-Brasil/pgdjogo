
if (typeof gdjs.evtsExt__Fantomas__FechaLimitesTela !== "undefined") {
  gdjs.evtsExt__Fantomas__FechaLimitesTela.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Fantomas__FechaLimitesTela = {};
gdjs.evtsExt__Fantomas__FechaLimitesTela.GDBloqueioObjects1= [];
gdjs.evtsExt__Fantomas__FechaLimitesTela.GDBloqueioObjects2= [];


gdjs.evtsExt__Fantomas__FechaLimitesTela.mapOfGDgdjs_9546evtsExt_9595_9595Fantomas_9595_9595FechaLimitesTela_9546GDBloqueioObjects1Objects = Hashtable.newFrom({"Bloqueio": gdjs.evtsExt__Fantomas__FechaLimitesTela.GDBloqueioObjects1});
gdjs.evtsExt__Fantomas__FechaLimitesTela.mapOfGDgdjs_9546evtsExt_9595_9595Fantomas_9595_9595FechaLimitesTela_9546GDBloqueioObjects1Objects = Hashtable.newFrom({"Bloqueio": gdjs.evtsExt__Fantomas__FechaLimitesTela.GDBloqueioObjects1});
gdjs.evtsExt__Fantomas__FechaLimitesTela.mapOfGDgdjs_9546evtsExt_9595_9595Fantomas_9595_9595FechaLimitesTela_9546GDBloqueioObjects1Objects = Hashtable.newFrom({"Bloqueio": gdjs.evtsExt__Fantomas__FechaLimitesTela.GDBloqueioObjects1});
gdjs.evtsExt__Fantomas__FechaLimitesTela.mapOfGDgdjs_9546evtsExt_9595_9595Fantomas_9595_9595FechaLimitesTela_9546GDBloqueioObjects1Objects = Hashtable.newFrom({"Bloqueio": gdjs.evtsExt__Fantomas__FechaLimitesTela.GDBloqueioObjects1});
gdjs.evtsExt__Fantomas__FechaLimitesTela.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Bloqueio"), gdjs.evtsExt__Fantomas__FechaLimitesTela.GDBloqueioObjects1);
{gdjs.evtsExt__Fantomas__ColocaBarreiras.func(runtimeScene, gdjs.evtsExt__Fantomas__FechaLimitesTela.mapOfGDgdjs_9546evtsExt_9595_9595Fantomas_9595_9595FechaLimitesTela_9546GDBloqueioObjects1Objects, "Topo", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__Fantomas__ColocaBarreiras.func(runtimeScene, gdjs.evtsExt__Fantomas__FechaLimitesTela.mapOfGDgdjs_9546evtsExt_9595_9595Fantomas_9595_9595FechaLimitesTela_9546GDBloqueioObjects1Objects, "Fundo", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__Fantomas__ColocaBarreiras.func(runtimeScene, gdjs.evtsExt__Fantomas__FechaLimitesTela.mapOfGDgdjs_9546evtsExt_9595_9595Fantomas_9595_9595FechaLimitesTela_9546GDBloqueioObjects1Objects, "Esquerda", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__Fantomas__ColocaBarreiras.func(runtimeScene, gdjs.evtsExt__Fantomas__FechaLimitesTela.mapOfGDgdjs_9546evtsExt_9595_9595Fantomas_9595_9595FechaLimitesTela_9546GDBloqueioObjects1Objects, "Direita", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.evtsExt__Fantomas__FechaLimitesTela.func = function(runtimeScene, Bloqueio, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Bloqueio": Bloqueio
},
  _objectArraysMap: {
"Bloqueio": gdjs.objectsListsToArray(Bloqueio)
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

gdjs.evtsExt__Fantomas__FechaLimitesTela.GDBloqueioObjects1.length = 0;
gdjs.evtsExt__Fantomas__FechaLimitesTela.GDBloqueioObjects2.length = 0;

gdjs.evtsExt__Fantomas__FechaLimitesTela.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Fantomas__FechaLimitesTela.GDBloqueioObjects1.length = 0;
gdjs.evtsExt__Fantomas__FechaLimitesTela.GDBloqueioObjects2.length = 0;


return;
}

gdjs.evtsExt__Fantomas__FechaLimitesTela.registeredGdjsCallbacks = [];