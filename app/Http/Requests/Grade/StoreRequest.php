<?php

namespace App\Http\Requests\Grade;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
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

        return [
            'novelty' => ['required', 'integer', 'max:100', 'min:1'],
            'statement' => ['required', 'integer', 'max:100', 'min:1'],
            'relevance' => ['required', 'integer', 'max:100', 'min:1'],
            'fullness' => ['required', 'integer', 'max:100', 'min:1'],
            'jury_id' => ['integer', 'min:1'],
            'article_id' => ['integer', 'min:1']
        ];
    }
}
