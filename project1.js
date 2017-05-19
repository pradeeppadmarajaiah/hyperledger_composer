/**
 * New script file
 */

function onVehicleRegistration(vehicleRegistration) {
    vehicleRegistration.asset.vehicleAvailabilityInitialState = vehicleRegistration.vehicleAvailabilityState;
    return getAssetRegistry('org.acme.model.Vehicle')
      .then(function (assetRegistry) {
          return assetRegistry.update(vehicleRegistration.asset);
      });
}
