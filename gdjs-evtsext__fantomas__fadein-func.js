
if (typeof gdjs.evtsExt__Fantomas__FadeIn !== "undefined") {
  gdjs.evtsExt__Fantomas__FadeIn.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Fantomas__FadeIn = {};
gdjs.evtsExt__Fantomas__FadeIn.GDobjTransicaoObjects1= [];
gdjs.evtsExt__Fantomas__FadeIn.GDobjTransicaoObjects2= [];


gdjs.evtsExt__Fantomas__FadeIn.mapOfEmptyGDobjTransicaoObjects = Hashtable.newFrom({"objTransicao": []});
gdjs.evtsExt__Fantomas__FadeIn.mapOfGDgdjs_9546evtsExt_9595_9595Fantomas_9595_9595FadeIn_9546GDobjTransicaoObjects1Objects = Hashtable.newFrom({"objTransicao": gdjs.evtsExt__Fantomas__FadeIn.GDobjTransicaoObjects1});
gdjs.evtsExt__Fantomas__FadeIn.asyncCallback27526980 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
{gdjs.evtTools.common.resolveAsyncEventsFunction((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__Fantomas__FadeIn.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.evtsExt__Fantomas__FadeIn.asyncCallback27526980(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Fantomas__FadeIn.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Fantomas__FadeIn.mapOfEmptyGDobjTransicaoObjects) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(27526212);
}
}
if (isConditionTrue_0) {
gdjs.evtsExt__Fantomas__FadeIn.GDobjTransicaoObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Fantomas__FadeIn.mapOfGDgdjs_9546evtsExt_9595_9595Fantomas_9595_9595FadeIn_9546GDobjTransicaoObjects1Objects, -(10000), -(10000), "Fade");
}{for(var i = 0, len = gdjs.evtsExt__Fantomas__FadeIn.GDobjTransicaoObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Fantomas__FadeIn.GDobjTransicaoObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Opacity")).setOpacity(255);
}
}{for(var i = 0, len = gdjs.evtsExt__Fantomas__FadeIn.GDobjTransicaoObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Fantomas__FadeIn.GDobjTransicaoObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setSize(gdjs.evtTools.window.getWindowInnerWidth() + 30000, gdjs.evtTools.window.getWindowInnerHeight() + 30000);
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Fade");
}{for(var i = 0, len = gdjs.evtsExt__Fantomas__FadeIn.GDobjTransicaoObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Fantomas__FadeIn.GDobjTransicaoObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Interpolação")).addObjectOpacityTween2("FadeOut", 0, "easeInOutSine", 1, true);
}
}
{ //Subevents
gdjs.evtsExt__Fantomas__FadeIn.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Fantomas__FadeIn.func = function(runtimeScene, objTransicao, Interpola_231_227o, parentEventsFunctionContext) {
var eventsFunctionContext = {
  task: new gdjs.ManuallyResolvableTask(),
  _objectsMap: {
"objTransicao": objTransicao
},
  _objectArraysMap: {
"objTransicao": gdjs.objectsListsToArray(objTransicao)
},
  _behaviorNamesMap: {
"Interpolação": Interpola_231_227o
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

gdjs.evtsExt__Fantomas__FadeIn.GDobjTransicaoObjects1.length = 0;
gdjs.evtsExt__Fantomas__FadeIn.GDobjTransicaoObjects2.length = 0;

gdjs.evtsExt__Fantomas__FadeIn.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Fantomas__FadeIn.GDobjTransicaoObjects1.length = 0;
gdjs.evtsExt__Fantomas__FadeIn.GDobjTransicaoObjects2.length = 0;


return eventsFunctionContext.task
}

gdjs.evtsExt__Fantomas__FadeIn.registeredGdjsCallbacks = [];