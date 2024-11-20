
if (typeof gdjs.evtsExt__Projeto_PGD__RetornaElemento !== "undefined") {
  gdjs.evtsExt__Projeto_PGD__RetornaElemento.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Projeto_PGD__RetornaElemento = {};
gdjs.evtsExt__Projeto_PGD__RetornaElemento.GDObjetoObjects1= [];
gdjs.evtsExt__Projeto_PGD__RetornaElemento.GDObjetoObjects2= [];
gdjs.evtsExt__Projeto_PGD__RetornaElemento.GDEfeitoObjects1= [];
gdjs.evtsExt__Projeto_PGD__RetornaElemento.GDEfeitoObjects2= [];


gdjs.evtsExt__Projeto_PGD__RetornaElemento.mapOfGDgdjs_9546evtsExt_9595_9595Projeto_9595PGD_9595_9595RetornaElemento_9546GDEfeitoObjects1Objects = Hashtable.newFrom({"Efeito": gdjs.evtsExt__Projeto_PGD__RetornaElemento.GDEfeitoObjects1});
gdjs.evtsExt__Projeto_PGD__RetornaElemento.mapOfGDgdjs_9546evtsExt_9595_9595Projeto_9595PGD_9595_9595RetornaElemento_9546GDEfeitoObjects2Objects = Hashtable.newFrom({"Efeito": gdjs.evtsExt__Projeto_PGD__RetornaElemento.GDEfeitoObjects2});
gdjs.evtsExt__Projeto_PGD__RetornaElemento.asyncCallback27655308 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Objeto"), gdjs.evtsExt__Projeto_PGD__RetornaElemento.GDObjetoObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("Efeito"), gdjs.evtsExt__Projeto_PGD__RetornaElemento.GDEfeitoObjects2);

{for(var i = 0, len = gdjs.evtsExt__Projeto_PGD__RetornaElemento.GDObjetoObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Projeto_PGD__RetornaElemento.GDObjetoObjects2[i].setPosition(eventsFunctionContext.getArgument("X"),eventsFunctionContext.getArgument("Y"));
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Projeto_PGD__RetornaElemento.mapOfGDgdjs_9546evtsExt_9595_9595Projeto_9595PGD_9595_9595RetornaElemento_9546GDEfeitoObjects2Objects, (( gdjs.evtsExt__Projeto_PGD__RetornaElemento.GDObjetoObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Projeto_PGD__RetornaElemento.GDObjetoObjects2[0].getAABBCenterX()), (( gdjs.evtsExt__Projeto_PGD__RetornaElemento.GDObjetoObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Projeto_PGD__RetornaElemento.GDObjetoObjects2[0].getAABBCenterY()), "Movimento");
}{for(var i = 0, len = gdjs.evtsExt__Projeto_PGD__RetornaElemento.GDObjetoObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Projeto_PGD__RetornaElemento.GDObjetoObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Transicao")).addObjectOpacityTween2("apagar", 255, "linear", 0.25, false);
}
}{gdjs.evtTools.common.resolveAsyncEventsFunction((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Projeto_PGD__RetornaElemento.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__Projeto_PGD__RetornaElemento.GDEfeitoObjects1) asyncObjectsList.addObject("Efeito", obj);
for (const obj of gdjs.evtsExt__Projeto_PGD__RetornaElemento.GDObjetoObjects1) asyncObjectsList.addObject("Objeto", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.25), (runtimeScene) => (gdjs.evtsExt__Projeto_PGD__RetornaElemento.asyncCallback27655308(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Projeto_PGD__RetornaElemento.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Objeto"), gdjs.evtsExt__Projeto_PGD__RetornaElemento.GDObjetoObjects1);
gdjs.evtsExt__Projeto_PGD__RetornaElemento.GDEfeitoObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Projeto_PGD__RetornaElemento.mapOfGDgdjs_9546evtsExt_9595_9595Projeto_9595PGD_9595_9595RetornaElemento_9546GDEfeitoObjects1Objects, (( gdjs.evtsExt__Projeto_PGD__RetornaElemento.GDObjetoObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Projeto_PGD__RetornaElemento.GDObjetoObjects1[0].getAABBCenterX()), (( gdjs.evtsExt__Projeto_PGD__RetornaElemento.GDObjetoObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Projeto_PGD__RetornaElemento.GDObjetoObjects1[0].getAABBCenterY()), "Movimento");
}{for(var i = 0, len = gdjs.evtsExt__Projeto_PGD__RetornaElemento.GDObjetoObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Projeto_PGD__RetornaElemento.GDObjetoObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Transicao")).addObjectOpacityTween2("apagar", 0, "linear", 0.25, false);
}
}
{ //Subevents
gdjs.evtsExt__Projeto_PGD__RetornaElemento.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Projeto_PGD__RetornaElemento.func = function(runtimeScene, Objeto, Transicao, X, Y, Efeito, parentEventsFunctionContext) {
var eventsFunctionContext = {
  task: new gdjs.ManuallyResolvableTask(),
  _objectsMap: {
"Objeto": Objeto
, "Efeito": Efeito
},
  _objectArraysMap: {
"Objeto": gdjs.objectsListsToArray(Objeto)
, "Efeito": gdjs.objectsListsToArray(Efeito)
},
  _behaviorNamesMap: {
"Transicao": Transicao
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Projeto_PGD__RetornaElemento.GDObjetoObjects1.length = 0;
gdjs.evtsExt__Projeto_PGD__RetornaElemento.GDObjetoObjects2.length = 0;
gdjs.evtsExt__Projeto_PGD__RetornaElemento.GDEfeitoObjects1.length = 0;
gdjs.evtsExt__Projeto_PGD__RetornaElemento.GDEfeitoObjects2.length = 0;

gdjs.evtsExt__Projeto_PGD__RetornaElemento.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Projeto_PGD__RetornaElemento.GDObjetoObjects1.length = 0;
gdjs.evtsExt__Projeto_PGD__RetornaElemento.GDObjetoObjects2.length = 0;
gdjs.evtsExt__Projeto_PGD__RetornaElemento.GDEfeitoObjects1.length = 0;
gdjs.evtsExt__Projeto_PGD__RetornaElemento.GDEfeitoObjects2.length = 0;


return eventsFunctionContext.task
}

gdjs.evtsExt__Projeto_PGD__RetornaElemento.registeredGdjsCallbacks = [];