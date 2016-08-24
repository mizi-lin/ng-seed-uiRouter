import {NG_VALIDATORS, Validator, AbstractControl} from '@angular/forms';
import {forwardRef, provide, Directive, Attribute} from '@angular/core';

declare var mu: any, console: any;

@Directive({
    selector: '[mVEquals]',
    providers: [
        provide(NG_VALIDATORS, {
            useExisting: forwardRef(() => MVEquals),
            multi: true
        })
    ]
})

export class MVEquals implements Validator {
    constructor(@Attribute('mVEquals') public mVEquals: string,
                @Attribute('reverse') public reverse: string) {

    }

    private get isReverse(): boolean {
        if (!this.reverse) return false;
        return this.reverse === 'true' ? true : false;
    }

    validate(c: AbstractControl): { [key: string]: any } {
        // self value
        let v = c.value;

        // control vlaue
        let e = c.root.find(this.mVEquals);

        // value not equal
        if (e && v !== e.value && !this.isReverse) {
            return {
                mVEquals: false
            };
        }

        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['mVEquals'];
            if (!Object.keys(e.errors).length) e.setErrors(null);
        }

        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({
                mVEquals: false
            });
        }

        return null;
    }
}
