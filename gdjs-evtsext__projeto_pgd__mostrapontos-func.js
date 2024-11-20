
if (typeof gdjs.evtsExt__Projeto_PGD__MostraPontos !== "undefined") {
  gdjs.evtsExt__Projeto_PGD__MostraPontos.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Projeto_PGD__MostraPontos = {};
gdjs.evtsExt__Projeto_PGD__MostraPontos.GDTextoObjects1= [];
gdjs.evtsExt__Projeto_PGD__MostraPontos.GDTextoObjects2= [];


gdjs.evtsExt__Projeto_PGD__MostraPontos.mapOfGDgdjs_9546evtsExt_9595_9595Projeto_9595PGD_9595_9595MostraPontos_9546GDTextoObjects1Objects = Hashtable.newFrom({"Texto": gdjs.evtsExt__Projeto_PGD__MostraPontos.GDTextoObjects1});
gdjs.evtsExt__Projeto_PGD__MostraPontos.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Valor")) || 0 : 0) == 1);
}
if (isConditionTrue_0) {
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2).setString(" PT");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Valor")) || 0 : 0) > 1);
}
if (isConditionTrue_0) {
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2).setString(" PTS");
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.evtsExt__Projeto_PGD__MostraPontos.GDTextoObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Projeto_PGD__MostraPontos.mapOfGDgdjs_9546evtsExt_9595_9595Projeto_9595PGD_9595_9595MostraPontos_9546GDTextoObjects1Objects, eventsFunctionContext.getArgument("X"), eventsFunctionContext.getArgument("Y") - 10, "");
}{for(var i = 0, len = gdjs.evtsExt__Projeto_PGD__MostraPontos.GDTextoObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Projeto_PGD__MostraPontos.GDTextoObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText("+" + ("" + eventsFunctionContext.getArgument("Valor")) + eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2).getAsString());
}
}{for(var i = 0, len = gdjs.evtsExt__Projeto_PGD__MostraPontos.GDTextoObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Projeto_PGD__MostraPontos.GDTextoObjects1[i].setZOrder(10000);
}
}{for(var i = 0, len = gdjs.evtsExt__Projeto_PGD__MostraPontos.GDTextoObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Projeto_PGD__MostraPontos.GDTextoObjects1[i].setCenterXInScene(eventsFunctionContext.getArgument("X"));
}
}{for(var i = 0, len = gdjs.evtsExt__Projeto_PGD__MostraPontos.GDTextoObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Projeto_PGD__MostraPontos.GDTextoObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Parameter")).addObjectPositionYTween2("sobePontos", (gdjs.evtsExt__Projeto_PGD__MostraPontos.GDTextoObjects1[i].getY()) - 100, "easeInOutSine", 1, false);
}
}{for(var i = 0, len = gdjs.evtsExt__Projeto_PGD__MostraPontos.GDTextoObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Projeto_PGD__MostraPontos.GDTextoObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Parameter")).addObjectOpacityTween2("apagaPontos", 0, "easeInOutSine", 1, true);
}
}}

}


};

gdjs.evtsExt__Projeto_PGD__MostraPontos.func = function(runtimeScene, Texto, Parameter, Valor, X, Y, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Texto": Texto
},
  _objectArraysMap: {
"Texto": gdjs.objectsListsToArray(Texto)
},
  _behaviorNamesMap: {
"Parameter": Parameter
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
if (argName === "Valor") return Valor;
if (argName === "X") return X;
if (argName === "Y") return Y;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Projeto_PGD__MostraPontos.GDTextoObjects1.length = 0;
gdjs.evtsExt__Projeto_PGD__MostraPontos.GDTextoObjects2.length = 0;

gdjs.evtsExt__Projeto_PGD__MostraPontos.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Projeto_PGD__MostraPontos.GDTextoObjects1.length = 0;
gdjs.evtsExt__Projeto_PGD__MostraPontos.GDTextoObjects2.length = 0;


return;
}

gdjs.evtsExt__Projeto_PGD__MostraPontos.registeredGdjsCallbacks = [];