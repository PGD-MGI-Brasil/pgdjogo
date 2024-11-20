
if (typeof gdjs.evtsExt__Projeto_PGD__CriaObjetoSokoban !== "undefined") {
  gdjs.evtsExt__Projeto_PGD__CriaObjetoSokoban.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Projeto_PGD__CriaObjetoSokoban = {};
gdjs.evtsExt__Projeto_PGD__CriaObjetoSokoban.GDObjetoObjects1= [];
gdjs.evtsExt__Projeto_PGD__CriaObjetoSokoban.GDObjetoObjects2= [];


gdjs.evtsExt__Projeto_PGD__CriaObjetoSokoban.mapOfGDgdjs_9546evtsExt_9595_9595Projeto_9595PGD_9595_9595CriaObjetoSokoban_9546GDObjetoObjects1Objects = Hashtable.newFrom({"Objeto": gdjs.evtsExt__Projeto_PGD__CriaObjetoSokoban.GDObjetoObjects1});
gdjs.evtsExt__Projeto_PGD__CriaObjetoSokoban.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.evtsExt__Projeto_PGD__CriaObjetoSokoban.GDObjetoObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Projeto_PGD__CriaObjetoSokoban.mapOfGDgdjs_9546evtsExt_9595_9595Projeto_9595PGD_9595_9595CriaObjetoSokoban_9546GDObjetoObjects1Objects, eventsFunctionContext.getArgument("X"), eventsFunctionContext.getArgument("Y"), eventsFunctionContext.getArgument("Camada"));
}{for(var i = 0, len = gdjs.evtsExt__Projeto_PGD__CriaObjetoSokoban.GDObjetoObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Projeto_PGD__CriaObjetoSokoban.GDObjetoObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setSize(eventsFunctionContext.getArgument("Tamalho_do_Módulo"), eventsFunctionContext.getArgument("Tamalho_do_Módulo"));
}
}}

}


};

gdjs.evtsExt__Projeto_PGD__CriaObjetoSokoban.func = function(runtimeScene, Objeto, X, Y, Tamalho_do_M_243dulo, Camada, parentEventsFunctionContext) {
var eventsFunctionContext = {
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
if (argName === "X") return X;
if (argName === "Y") return Y;
if (argName === "Tamalho_do_Módulo") return Tamalho_do_M_243dulo;
if (argName === "Camada") return Camada;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Projeto_PGD__CriaObjetoSokoban.GDObjetoObjects1.length = 0;
gdjs.evtsExt__Projeto_PGD__CriaObjetoSokoban.GDObjetoObjects2.length = 0;

gdjs.evtsExt__Projeto_PGD__CriaObjetoSokoban.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Projeto_PGD__CriaObjetoSokoban.GDObjetoObjects1.length = 0;
gdjs.evtsExt__Projeto_PGD__CriaObjetoSokoban.GDObjetoObjects2.length = 0;


return;
}

gdjs.evtsExt__Projeto_PGD__CriaObjetoSokoban.registeredGdjsCallbacks = [];