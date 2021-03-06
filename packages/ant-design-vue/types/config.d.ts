import {FormData, VNodeData} from "@caxa-form/core";
import {Button, Col, Popover, Row, Tooltip} from "ant-design-vue";
import {Api} from "./index";

export interface OptionAttrs {
    col?: Boolean | Col & {
        labelWidth?: number | string;
        show?: Boolean;
    };
    row?: Boolean | Row & {
        show?: Boolean;
    };
    info?: Boolean | (Tooltip | Popover) & VNodeData & {
        show?: Boolean;
        native?: Boolean;
        icon?: string;
        align?: 'left' | 'right';
        info?: string;
    };
    wrap?: Boolean | VNodeData & {
        colon?: boolean;
        extra?: any;
        hasFeedback?: boolean;
        help?: any;
        label?: any;
        labelCol?: Col;
        required?: boolean;
        validateStatus?: '' | 'success' | 'warning' | 'error' | 'validating';
        wrapperCol?: Col;
        labelAlign?: 'left' | 'right';
        autoLink?: boolean;
        show?: Boolean;
    };
    form?: {
        hideRequiredMark?: boolean;
        labelCol?: Col;
        layout?: 'horizontal' | 'inline' | 'vertical';
        wrapperCol?: Col;
        colon?: boolean;
        labelAlign?: 'left' | 'right';
        validateMessages?: any;
        validateOnRuleChange?: boolean;
        className?: any;
        col?: Boolean;
    };

    submitBtn?: Boolean | Button & {
        click?: Function;
        innerText?: string;
        show?: Boolean;
    };

    resetBtn?: Boolean | Button & {
        click?: Function;
        innerText?: string;
        show?: Boolean;
    };

}

declare const optionAttrs: OptionAttrs & {
    title?: Boolean | VNodeData & {
        show?: Boolean;
        native?: Boolean;
        title?: string;
    };
};

interface children {
    children?: VNodeData[]
}

export interface CreatorAttrs {
    col(props: typeof optionAttrs.col): this;

    wrap(props: typeof optionAttrs.wrap): this;

    title(props: string | typeof optionAttrs.title & children): this;

    info(props: string | typeof optionAttrs.info & children): this;

    className(prop: string): this;

}

export interface RuleAttrs {
    col?: typeof optionAttrs.col;
    wrap?: typeof optionAttrs.wrap;
    title?: string | typeof optionAttrs.title & children;
    info?: string | typeof optionAttrs.info & children;
    className?: string;
}

export interface ApiAttrs {
    btn: {
        loading(loading: boolean): void;
        disabled(disabled: boolean): void;
        show(show: boolean): void;
    }
    resetBtn: {
        loading(loading: boolean): void;
        disabled(disabled: boolean): void;
        show(show: boolean): void;
    }

    submit(success: (formData: FormData, $f: Api) => void, fail: ($f: Api) => void): void;

    clearValidateState(fields?: string | string[], clearSub?: Boolean): void;

    clearSubValidateState(fields?: string | string[]): void;

    validate(callback?: (callback?: (boolean: boolean, object: Object) => void) => void): void;

    validateField(field: string, callback?: (errorMessage: string) => void): void;

    submitBtnProps(props: Button): void;

    resetBtnProps(props: Button): void;

}