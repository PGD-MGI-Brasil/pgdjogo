
if (typeof gdjs.evtsExt__Projeto_PGD__ChefeParaMesa !== "undefined") {
  gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Projeto_PGD__ChefeParaMesa = {};
gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.GDChefeObjects1= [];
gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.GDChefeObjects2= [];
gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.GDChefeObjects3= [];
gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.GDChefeObjects4= [];


gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.asyncCallback27662620 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Chefe"), gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.GDChefeObjects4);

{for(var i = 0, len = gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.GDChefeObjects4.length ;i < len;++i) {
    gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.GDChefeObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Flippable")).flipX(false);
}
}{gdjs.evtTools.common.resolveAsyncEventsFunction((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.eventsList0 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.GDChefeObjects3) asyncObjectsList.addObject("Chefe", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.asyncCallback27662620(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.asyncCallback27663276 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Chefe"), gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.GDChefeObjects3);

{for(var i = 0, len = gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.GDChefeObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.GDChefeObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Interpolação")).addObjectPositionXTween2("moveChefe", eventsFunctionContext.getArgument("X_Inicial"), "easeOutSine", 0.5, false);
}
}
{ //Subevents
gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.eventsList0(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.eventsList1 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.GDChefeObjects2) asyncObjectsList.addObject("Chefe", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getAsNumber()), (runtimeScene) => (gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.asyncCallback27663276(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.asyncCallback27663092 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Chefe"), gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.GDChefeObjects2);

{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).setNumber(Math.abs((( gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.GDChefeObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.GDChefeObjects2[0].getPointY("")) - eventsFunctionContext.getArgument("Y_Inicial")) / (100 * eventsFunctionContext.getArgument("Velocidade")));
}{for(var i = 0, len = gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.GDChefeObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.GDChefeObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Interpolação")).addObjectPositionYTween2("moveChefe", eventsFunctionContext.getArgument("Y_Inicial"), "linear", eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getAsNumber(), false);
}
}
{ //Subevents
gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.eventsList1(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.GDChefeObjects1) asyncObjectsList.addObject("Chefe", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getAsNumber()), (runtimeScene) => (gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.asyncCallback27663092(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Chefe"), gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.GDChefeObjects1);
{for(var i = 0, len = gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.GDChefeObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.GDChefeObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Flippable")).flipX(true);
}
}{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).setNumber(Math.abs((( gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.GDChefeObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.GDChefeObjects1[0].getPointX("")) - eventsFunctionContext.getArgument("Distancia_Mesa")) / (100 * eventsFunctionContext.getArgument("Velocidade")));
}{for(var i = 0, len = gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.GDChefeObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.GDChefeObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Interpolação")).addObjectPositionXTween2("moveChefe", eventsFunctionContext.getArgument("Distancia_Mesa"), "easeInSine", eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getAsNumber(), false);
}
}
{ //Subevents
gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.func = function(runtimeScene, Chefe, Interpola_231_227o, Velocidade, X_Inicial, Y_Inicial, Distancia_Mesa, parentEventsFunctionContext) {
var eventsFunctionContext = {
  task: new gdjs.ManuallyResolvableTask(),
  _objectsMap: {
"Chefe": Chefe
},
  _objectArraysMap: {
"Chefe": gdjs.objectsListsToArray(Chefe)
},
  _behaviorNamesMap: {
"Interpolação": Interpola_231_227o
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
if (argName === "Velocidade") return Velocidade;
if (argName === "X_Inicial") return X_Inicial;
if (argName === "Y_Inicial") return Y_Inicial;
if (argName === "Distancia_Mesa") return Distancia_Mesa;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.GDChefeObjects1.length = 0;
gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.GDChefeObjects2.length = 0;
gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.GDChefeObjects3.length = 0;
gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.GDChefeObjects4.length = 0;

gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.eventsList3(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.GDChefeObjects1.length = 0;
gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.GDChefeObjects2.length = 0;
gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.GDChefeObjects3.length = 0;
gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.GDChefeObjects4.length = 0;


return eventsFunctionContext.task
}

gdjs.evtsExt__Projeto_PGD__ChefeParaMesa.registeredGdjsCallbacks = [];