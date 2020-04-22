<?php

namespace App\Http\Requests\Articles;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $id = request()->route('article')->id;
        return [
            'title' => ['required', 'string', 'max:255'],
            'section' => ['required', 'string', 'max:255'],
            'annotation' => ['required', 'string'],
            'body' => ['required', 'string'],
            'status' =>['string']
        ];
    }
}
