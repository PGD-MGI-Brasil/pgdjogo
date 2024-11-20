
if (typeof gdjs.evtsExt__Fantomas__PosicionaDentroSuperior !== "undefined") {
  gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Fantomas__PosicionaDentroSuperior = {};
gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595InternoObjects1= [];
gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595InternoObjects2= [];
gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595ExternoObjects1= [];
gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595ExternoObjects2= [];


gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Objeto_Externo"), gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595ExternoObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Objeto_Interno"), gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595InternoObjects1);
{for(var i = 0, len = gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595InternoObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595InternoObjects1[i].setZOrder((( gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595ExternoObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595ExternoObjects1[0].getZOrder()) + 1);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Posicao") : "") == "Direito");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Objeto_Externo"), gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595ExternoObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Objeto_Interno"), gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595InternoObjects1);
{for(var i = 0, len = gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595InternoObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595InternoObjects1[i].setPosition((( gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595ExternoObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595ExternoObjects1[0].getAABBRight()) - (gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595InternoObjects1[i].getWidth()) - (gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595InternoObjects1[i].getHeight()),(( gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595ExternoObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595ExternoObjects1[0].getY()) + 1.5 * (gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595InternoObjects1[i].getHeight()));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Posicao") : "") == "Central");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Objeto_Externo"), gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595ExternoObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Objeto_Interno"), gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595InternoObjects1);
{for(var i = 0, len = gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595InternoObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595InternoObjects1[i].setY((( gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595ExternoObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595ExternoObjects1[0].getY()) + 1.5 * (gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595InternoObjects1[i].getHeight()));
}
}{for(var i = 0, len = gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595InternoObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595InternoObjects1[i].setCenterXInScene((( gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595ExternoObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595ExternoObjects1[0].getAABBCenterX()));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Posicao") : "") == "Esquerdo");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Objeto_Externo"), gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595ExternoObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Objeto_Interno"), gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595InternoObjects1);
{for(var i = 0, len = gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595InternoObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595InternoObjects1[i].setPosition((( gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595ExternoObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595ExternoObjects1[0].getX()) + (gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595InternoObjects1[i].getHeight()) / 2,(( gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595ExternoObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595ExternoObjects1[0].getY()) + 1.5 * (gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595InternoObjects1[i].getHeight()));
}
}}

}


};

gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.func = function(runtimeScene, Objeto_Interno, Posicao, Objeto_Externo, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Objeto_Interno": Objeto_Interno
, "Objeto_Externo": Objeto_Externo
},
  _objectArraysMap: {
"Objeto_Interno": gdjs.objectsListsToArray(Objeto_Interno)
, "Objeto_Externo": gdjs.objectsListsToArray(Objeto_Externo)
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
if (argName === "Posicao") return Posicao;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595InternoObjects1.length = 0;
gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595InternoObjects2.length = 0;
gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595ExternoObjects1.length = 0;
gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595ExternoObjects2.length = 0;

gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595InternoObjects1.length = 0;
gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595InternoObjects2.length = 0;
gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595ExternoObjects1.length = 0;
gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.GDObjeto_9595ExternoObjects2.length = 0;


return;
}

gdjs.evtsExt__Fantomas__PosicionaDentroSuperior.registeredGdjsCallbacks = [];