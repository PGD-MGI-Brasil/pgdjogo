
if (typeof gdjs.evtsExt__Projeto_PGD__MoveBlocoSokoban !== "undefined") {
  gdjs.evtsExt__Projeto_PGD__MoveBlocoSokoban.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Projeto_PGD__MoveBlocoSokoban = {};
gdjs.evtsExt__Projeto_PGD__MoveBlocoSokoban.GDObjetoObjects1= [];
gdjs.evtsExt__Projeto_PGD__MoveBlocoSokoban.GDObjetoObjects2= [];


gdjs.evtsExt__Projeto_PGD__MoveBlocoSokoban.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("DireçãoMovimento")) || 0 : 0) == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Objeto"), gdjs.evtsExt__Projeto_PGD__MoveBlocoSokoban.GDObjetoObjects1);
{for(var i = 0, len = gdjs.evtsExt__Projeto_PGD__MoveBlocoSokoban.GDObjetoObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Projeto_PGD__MoveBlocoSokoban.GDObjetoObjects1[i].setPosition(gdjs.evtsExt__Projeto_PGD__MoveBlocoSokoban.GDObjetoObjects1[i].getX() +(eventsFunctionContext.getArgument("TamModulo")),gdjs.evtsExt__Projeto_PGD__MoveBlocoSokoban.GDObjetoObjects1[i].getY() +(0));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("DireçãoMovimento")) || 0 : 0) == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Objeto"), gdjs.evtsExt__Projeto_PGD__MoveBlocoSokoban.GDObjetoObjects1);
{for(var i = 0, len = gdjs.evtsExt__Projeto_PGD__MoveBlocoSokoban.GDObjetoObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Projeto_PGD__MoveBlocoSokoban.GDObjetoObjects1[i].setPosition(gdjs.evtsExt__Projeto_PGD__MoveBlocoSokoban.GDObjetoObjects1[i].getX() -(eventsFunctionContext.getArgument("TamModulo")),gdjs.evtsExt__Projeto_PGD__MoveBlocoSokoban.GDObjetoObjects1[i].getY() -(0));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("DireçãoMovimento")) || 0 : 0) == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Objeto"), gdjs.evtsExt__Projeto_PGD__MoveBlocoSokoban.GDObjetoObjects1);
{for(var i = 0, len = gdjs.evtsExt__Projeto_PGD__MoveBlocoSokoban.GDObjetoObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Projeto_PGD__MoveBlocoSokoban.GDObjetoObjects1[i].setPosition(gdjs.evtsExt__Projeto_PGD__MoveBlocoSokoban.GDObjetoObjects1[i].getX() -(0),gdjs.evtsExt__Projeto_PGD__MoveBlocoSokoban.GDObjetoObjects1[i].getY() -(eventsFunctionContext.getArgument("TamModulo")));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("DireçãoMovimento")) || 0 : 0) == 4);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Objeto"), gdjs.evtsExt__Projeto_PGD__MoveBlocoSokoban.GDObjetoObjects1);
{for(var i = 0, len = gdjs.evtsExt__Projeto_PGD__MoveBlocoSokoban.GDObjetoObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Projeto_PGD__MoveBlocoSokoban.GDObjetoObjects1[i].setPosition(gdjs.evtsExt__Projeto_PGD__MoveBlocoSokoban.GDObjetoObjects1[i].getX() +(0),gdjs.evtsExt__Projeto_PGD__MoveBlocoSokoban.GDObjetoObjects1[i].getY() +(eventsFunctionContext.getArgument("TamModulo")));
}
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.common.resolveAsyncEventsFunction((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.evtsExt__Projeto_PGD__MoveBlocoSokoban.func = function(runtimeScene, Objeto, Dire_231_227oMovimento, TamModulo, parentEventsFunctionContext) {
var eventsFunctionContext = {
  task: new gdjs.ManuallyResolvableTask(),
  _objectsMap: {
"Objeto": Objeto
},
  _objectArraysMap: {
"Objeto": gdjs.objectsListsToArray(Objeto)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Projeto_PGD"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Projeto_PGD"),
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
if (argName === "DireçãoMovimento") return Dire_231_227oMovimento;
if (argName === "TamModulo") return TamModulo;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Projeto_PGD__MoveBlocoSokoban.GDObjetoObjects1.length = 0;
gdjs.evtsExt__Projeto_PGD__MoveBlocoSokoban.GDObjetoObjects2.length = 0;

gdjs.evtsExt__Projeto_PGD__MoveBlocoSokoban.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Projeto_PGD__MoveBlocoSokoban.GDObjetoObjects1.length = 0;
gdjs.evtsExt__Projeto_PGD__MoveBlocoSokoban.GDObjetoObjects2.length = 0;


return eventsFunctionContext.task
}

gdjs.evtsExt__Projeto_PGD__MoveBlocoSokoban.registeredGdjsCallbacks = [];