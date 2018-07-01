import {Randoland} from "../src/pages/randoland/randoland";
import {RandolandDetail} from "../src/pages/randoland-detail/randoland-detail";
import {LocationProvider} from "../src/providers/location-provider";
import {CurrentRando} from "../src/pages/current-rando/current-rando";
import {Timer} from "../src/model/timer";
import { Geolocation } from '@ionic-native/geolocation';
import { HttpClient } from '@angular/common/http';

describe("Load randos", () => {

  let randoland = null;

  beforeEach(() => {
    randoland = new Randoland(new NavController(), new NavParams(), new DataProvider(new HttpClient()));
  });

  it('should return a 3 length list', () => {
    expect(randoland.list.length).toBe(3);
  });

  describe("Access Detail Rando", () => {
    let detail = null;

    beforeEach(() => {
      detail = new RandolandDetail(new NavController(), new NavParams(), new LocationProvider(new Geolocation()));
    });

    it('should have a valid rando', () => {
      expect(detail.rando).toBeDefined();
      expect(detail.rando.steps.length).toBePositiveInfinity();
    });

    it('should find our location', () => {
      expect(detail.pos).toBeDefined();
      let provider = new LocationProvider(new Geolocation());
      expect(provider.getFirstLoc()).toBeCloseTo(detail.pos);
    });

    describe("Begin rando", () => {
      let rando = null;

      beforeEach(() => {
        rando = new CurrentRando(new NavController(), new NavParams(), new LocationProvider(new Geolocation()));
      });

      it('should start the timer', () => {
        expect(rando.timer.secondes).toBePositiveInfinity();
      });
    });
  });
});

describe("Timer", () => {

  let timer = null;

  beforeEach(() => {
    timer = new Timer();
    timer.start();
  });

  it('should start', () => {
    expect(timer.secondes).toBePositiveInfinity();
  });

  it('should stop and reset', () => {
    timer.stop();
    timer.reset();
    expect(timer.secondes).toBe(0);
  });

});
