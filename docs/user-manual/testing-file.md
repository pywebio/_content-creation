---
sidebar_position: 1
title: Input
---

# Testing File

Testing out headings

## Testing heading 2

User's guide
============

If you are familiar with web development, you may not be accustomed to the usage of PyWebIO described below, which is
different from the traditional web development pattern that backend implement api and frontend display content.
In PyWebIO, you only need to write code in Python.

In fact, the way of writing PyWebIO applications is more like writing a console program, except that the terminal here
becomes a browser. Using the imperative API provided by PyWebIO, you can simply call ``put_text()``, ``put_image()``,
``put_table()`` and other functions to output text, pictures, tables and other content to the browser, or you can call
some functions such as ``input()``, ``select()``, ``file_upload()`` to display different forms on the browser to get
user input. In addition, PyWebIO also provides support for click events, layout, etc. PyWebIO aims to allow you to use
the least code to interact with the user and provide a good user experience as much as possible.

This user guide introduces you the most of the features of PyWebIO. There is a demo link at the top right of the example
codes in this document, where you can run the example code online and see what happens.

Input
------------

The input functions are defined in the :doc:`pywebio.input </input>` module and can be imported using ``from pywebio.input import *``.

When calling the input function, an input form  will be popped up on the browser. PyWebIO's input functions is blocking
(same as Python's built-in ``input()`` function) and will not return until the form is successfully submitted.

Basic input
^^^^^^^^^^^^^

Here are some basic types of input.

Text input:

.. exportable-codeblock::
    :name: text-input
    :summary: Text input

    age = input("How old are you?", type=NUMBER)
    put_text('age = %r' % age)  # ..demo-only

After running the above code, the browser will pop up a text input field to get the input. After the user completes the
input and submits the form, the function returns the value entered by the user.

Here are some other types of input functions:

.. exportable-codeblock::
    :name: basic-input
    :summary: Basic input

    # Password input
    password = input("Input password", type=PASSWORD)
    put_text('password = %r' % password)  # ..demo-only
    ## ----

    # Drop-down selection
    gift = select('Which gift you want?', ['keyboard', 'ipad'])
    put_text('gift = %r' % gift)  # ..demo-only
    ## ----

    # Checkbox
    agree = checkbox("User Term", options=['I agree to terms and conditions'])
    put_text('agree = %r' % agree)  # ..demo-only
    ## ----

    # Single choice
    answer = radio("Choose one", options=['A', 'B', 'C', 'D'])
    put_text('answer = %r' % answer)  # ..demo-only
    ## ----

    # Multi-line text input
    text = textarea('Text Area', rows=3, placeholder='Some text')
    put_text('text = %r' % text)  # ..demo-only
    ## ----

    # File Upload
    img = file_upload("Select a image:", accept="image/*")
    if img:    # ..demo-only
        put_image(img['content'], title=img['filename'])  # ..demo-only


Parameter of input functions
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

There are many parameters that can be passed to the input function(for complete parameters, please refer to the
:doc:`function document </input>`):

.. exportable-codeblock::
    :name: input-args
    :summary: Parameter of input functions

    input('This is label', type=TEXT, placeholder='This is placeholder',
            help_text='This is help text', required=True)

The results of the above example are as follows:

.. image:: /assets/input_1.png

You can specify a validation function for the input by using ``validate`` parameter. The validation function should
return ``None`` when the check passes, otherwise an error message will be returned:

.. exportable-codeblock::
    :name: input-valid-func
    :summary: Input validate function for

    def check_age(p):  # return None when the check passes, otherwise return the error message
        if p < 10:
            return 'Too young!!'
        if p > 60:
            return 'Too old!!'

    age = input("How old are you?", type=NUMBER, validate=check_age)
    put_text('age = %r' % age)  # ..demo-only

When the user input an illegal value, the input field is displayed as follows:

.. image:: /assets/input_2.png

You can use ``code`` parameter in :func:`pywebio.input.textarea()` to make a code editing textarea.

.. exportable-codeblock::
    :name: codemirror
    :summary: Code editing by using textarea

    code = textarea('Code Edit', code={
        'mode': "python",
        'theme': 'darcula',
    }, value='import something\n# Write your python code')
    put_code(code, language='python')  # ..demo-only

The results of the above example are as follows:

.. image:: /assets/codemirror_textarea.png



OK, Have fun with PyWebIO!