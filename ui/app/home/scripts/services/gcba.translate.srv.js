/**
 * Created by julian on 25/07/16.
 */
'use strict';

export default
class TranslateService {

    /*@ngInject*/
    constructor($filter) {
        this.filter = $filter;
    }

    translate(key){
        return this.filter('translate')(key);
    }

    translateKey(key,object){
        return this.filter('translate')(key,object);
    }

}