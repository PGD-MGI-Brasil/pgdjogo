
if (typeof gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario !== "undefined") {
  gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario = {};
gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDChefeObjects1= [];
gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDChefeObjects2= [];
gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDChefeObjects3= [];
gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDChefeObjects4= [];
gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDFuncion_95225rioObjects1= [];
gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDFuncion_95225rioObjects2= [];
gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDFuncion_95225rioObjects3= [];
gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDFuncion_95225rioObjects4= [];


gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.asyncCallback27659796 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Chefe"), gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDChefeObjects4);

gdjs.copyArray(asyncObjectsList.getObjects("Funcionário"), gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDFuncion_95225rioObjects4);

{gdjs.evtTools.common.resolveAsyncEventsFunction((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDChefeObjects4.length ;i < len;++i) {
    gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDChefeObjects4[i].setZOrder((( gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDFuncion_95225rioObjects4.length === 0 ) ? 0 :gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDFuncion_95225rioObjects4[0].getZOrder()) - 1);
}
}eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.eventsList0 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDChefeObjects3) asyncObjectsList.addObject("Chefe", obj);
for (const obj of gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDFuncion_95225rioObjects3) asyncObjectsList.addObject("Funcionário", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getAsNumber()), (runtimeScene) => (gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.asyncCallback27659796(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.asyncCallback27659332 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Chefe"), gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDChefeObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("Funcionário"), gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDFuncion_95225rioObjects3);

{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).setNumber(Math.abs((( gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDChefeObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDChefeObjects3[0].getPointX("")) - ((( gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDFuncion_95225rioObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDFuncion_95225rioObjects3[0].getPointX("")) + (( gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDFuncion_95225rioObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDFuncion_95225rioObjects3[0].getWidth()) + 5)) / (100 * eventsFunctionContext.getArgument("Velocidade")));
}{for(var i = 0, len = gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDChefeObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDChefeObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Interpolação")).addObjectPositionXTween2("moveChefe", (( gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDFuncion_95225rioObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDFuncion_95225rioObjects3[0].getAABBRight()) - (( gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDFuncion_95225rioObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDFuncion_95225rioObjects3[0].getWidth()) * 0.2, "easeOutSine", eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getAsNumber(), false);
}
}
{ //Subevents
gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.eventsList0(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.eventsList1 = function(runtimeScene, eventsFunctionContext, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDChefeObjects2) asyncObjectsList.addObject("Chefe", obj);
for (const obj of gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDFuncion_95225rioObjects2) asyncObjectsList.addObject("Funcionário", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getAsNumber()), (runtimeScene) => (gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.asyncCallback27659332(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.asyncCallback27658604 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Chefe"), gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDChefeObjects2);

gdjs.copyArray(eventsFunctionContext.getObjects("Funcionário"), gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDFuncion_95225rioObjects2);
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).setNumber(Math.abs((( gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDChefeObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDChefeObjects2[0].getPointY("")) - (( gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDFuncion_95225rioObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDFuncion_95225rioObjects2[0].getPointY("")) - 1) / (100 * eventsFunctionContext.getArgument("Velocidade")));
}{for(var i = 0, len = gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDChefeObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDChefeObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Interpolação")).addObjectPositionYTween2("moveChefe", (( gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDFuncion_95225rioObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDFuncion_95225rioObjects2[0].getAABBBottom()) - (gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDChefeObjects2[i].getHeight()) - 10, "linear", eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getAsNumber(), false);
}
}
{ //Subevents
gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.eventsList1(runtimeScene, eventsFunctionContext, asyncObjectsList);} //End of subevents
eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
for (const obj of gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDChefeObjects1) asyncObjectsList.addObject("Chefe", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.asyncCallback27658604(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Chefe"), gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDChefeObjects1);
{for(var i = 0, len = gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDChefeObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDChefeObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Interpolação")).addObjectPositionXTween2("moveChefe", eventsFunctionContext.getArgument("Deslocamento"), "easeInSine", 1, false);
}
}
{ //Subevents
gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.func = function(runtimeScene, Chefe, Interpola_231_227o, Funcion_225rio, Velocidade, Deslocamento, parentEventsFunctionContext) {
var eventsFunctionContext = {
  task: new gdjs.ManuallyResolvableTask(),
  _objectsMap: {
"Chefe": Chefe
, "Funcionário": Funcion_225rio
},
  _objectArraysMap: {
"Chefe": gdjs.objectsListsToArray(Chefe)
, "Funcionário": gdjs.objectsListsToArray(Funcion_225rio)
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
if (argName === "Deslocamento") return Deslocamento;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDChefeObjects1.length = 0;
gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDChefeObjects2.length = 0;
gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDChefeObjects3.length = 0;
gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDChefeObjects4.length = 0;
gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDFuncion_95225rioObjects1.length = 0;
gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDFuncion_95225rioObjects2.length = 0;
gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDFuncion_95225rioObjects3.length = 0;
gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDFuncion_95225rioObjects4.length = 0;

gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.eventsList3(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDChefeObjects1.length = 0;
gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDChefeObjects2.length = 0;
gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDChefeObjects3.length = 0;
gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDChefeObjects4.length = 0;
gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDFuncion_95225rioObjects1.length = 0;
gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDFuncion_95225rioObjects2.length = 0;
gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDFuncion_95225rioObjects3.length = 0;
gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.GDFuncion_95225rioObjects4.length = 0;


return eventsFunctionContext.task
}

gdjs.evtsExt__Projeto_PGD__ChefeParaFuncionario.registeredGdjsCallbacks = [];