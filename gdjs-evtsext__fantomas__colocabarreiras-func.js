
if (typeof gdjs.evtsExt__Fantomas__ColocaBarreiras !== "undefined") {
  gdjs.evtsExt__Fantomas__ColocaBarreiras.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Fantomas__ColocaBarreiras = {};
gdjs.evtsExt__Fantomas__ColocaBarreiras.GDBarreiraObjects1= [];
gdjs.evtsExt__Fantomas__ColocaBarreiras.GDBarreiraObjects2= [];


gdjs.evtsExt__Fantomas__ColocaBarreiras.mapOfGDgdjs_9546evtsExt_9595_9595Fantomas_9595_9595ColocaBarreiras_9546GDBarreiraObjects1Objects = Hashtable.newFrom({"Barreira": gdjs.evtsExt__Fantomas__ColocaBarreiras.GDBarreiraObjects1});
gdjs.evtsExt__Fantomas__ColocaBarreiras.mapOfGDgdjs_9546evtsExt_9595_9595Fantomas_9595_9595ColocaBarreiras_9546GDBarreiraObjects1Objects = Hashtable.newFrom({"Barreira": gdjs.evtsExt__Fantomas__ColocaBarreiras.GDBarreiraObjects1});
gdjs.evtsExt__Fantomas__ColocaBarreiras.mapOfGDgdjs_9546evtsExt_9595_9595Fantomas_9595_9595ColocaBarreiras_9546GDBarreiraObjects1Objects = Hashtable.newFrom({"Barreira": gdjs.evtsExt__Fantomas__ColocaBarreiras.GDBarreiraObjects1});
gdjs.evtsExt__Fantomas__ColocaBarreiras.mapOfGDgdjs_9546evtsExt_9595_9595Fantomas_9595_9595ColocaBarreiras_9546GDBarreiraObjects1Objects = Hashtable.newFrom({"Barreira": gdjs.evtsExt__Fantomas__ColocaBarreiras.GDBarreiraObjects1});
gdjs.evtsExt__Fantomas__ColocaBarreiras.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Posição") : "") == "Topo");
}
if (isConditionTrue_0) {
gdjs.evtsExt__Fantomas__ColocaBarreiras.GDBarreiraObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Fantomas__ColocaBarreiras.mapOfGDgdjs_9546evtsExt_9595_9595Fantomas_9595_9595ColocaBarreiras_9546GDBarreiraObjects1Objects, 0, -(500), "");
}{for(var i = 0, len = gdjs.evtsExt__Fantomas__ColocaBarreiras.GDBarreiraObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Fantomas__ColocaBarreiras.GDBarreiraObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setSize(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene), 500);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Posição") : "") == "Fundo");
}
if (isConditionTrue_0) {
gdjs.evtsExt__Fantomas__ColocaBarreiras.GDBarreiraObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Fantomas__ColocaBarreiras.mapOfGDgdjs_9546evtsExt_9595_9595Fantomas_9595_9595ColocaBarreiras_9546GDBarreiraObjects1Objects, 0, gdjs.evtTools.window.getGameResolutionHeight(runtimeScene), "");
}{for(var i = 0, len = gdjs.evtsExt__Fantomas__ColocaBarreiras.GDBarreiraObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Fantomas__ColocaBarreiras.GDBarreiraObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setSize(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene), 500);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Posição") : "") == "Direita");
}
if (isConditionTrue_0) {
gdjs.evtsExt__Fantomas__ColocaBarreiras.GDBarreiraObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Fantomas__ColocaBarreiras.mapOfGDgdjs_9546evtsExt_9595_9595Fantomas_9595_9595ColocaBarreiras_9546GDBarreiraObjects1Objects, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene), 0, "");
}{for(var i = 0, len = gdjs.evtsExt__Fantomas__ColocaBarreiras.GDBarreiraObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Fantomas__ColocaBarreiras.GDBarreiraObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setSize(500, gdjs.evtTools.window.getWindowInnerHeight());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Posição") : "") == "Esquerda");
}
if (isConditionTrue_0) {
gdjs.evtsExt__Fantomas__ColocaBarreiras.GDBarreiraObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Fantomas__ColocaBarreiras.mapOfGDgdjs_9546evtsExt_9595_9595Fantomas_9595_9595ColocaBarreiras_9546GDBarreiraObjects1Objects, -(500), 0, "");
}{for(var i = 0, len = gdjs.evtsExt__Fantomas__ColocaBarreiras.GDBarreiraObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Fantomas__ColocaBarreiras.GDBarreiraObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setSize(500, gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Barreira"), gdjs.evtsExt__Fantomas__ColocaBarreiras.GDBarreiraObjects1);
{for(var i = 0, len = gdjs.evtsExt__Fantomas__ColocaBarreiras.GDBarreiraObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Fantomas__ColocaBarreiras.GDBarreiraObjects1[i].hide();
}
}}

}


};

gdjs.evtsExt__Fantomas__ColocaBarreiras.func = function(runtimeScene, Barreira, Posi_231_227o, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Barreira": Barreira
},
  _objectArraysMap: {
"Barreira": gdjs.objectsListsToArray(Barreira)
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
if (argName === "Posição") return Posi_231_227o;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Fantomas__ColocaBarreiras.GDBarreiraObjects1.length = 0;
gdjs.evtsExt__Fantomas__ColocaBarreiras.GDBarreiraObjects2.length = 0;

gdjs.evtsExt__Fantomas__ColocaBarreiras.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Fantomas__ColocaBarreiras.GDBarreiraObjects1.length = 0;
gdjs.evtsExt__Fantomas__ColocaBarreiras.GDBarreiraObjects2.length = 0;


return;
}

gdjs.evtsExt__Fantomas__ColocaBarreiras.registeredGdjsCallbacks = [];