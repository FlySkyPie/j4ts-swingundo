declare namespace javax.swing.event {
    /**
     * Constructs an UndoableEditEvent object.
     *
     * @param {*} source  the Object that originated the event
     * (typically <code>this</code>)
     * @param {javax.swing.undo.UndoableEdit} edit    an UndoableEdit object
     * @class
     */
    class UndoableEditEvent {
        myEdit: javax.swing.undo.UndoableEdit;
        constructor(source: any, edit: javax.swing.undo.UndoableEdit);
        /**
         * Returns the edit value.
         *
         * @return {javax.swing.undo.UndoableEdit} the UndoableEdit object encapsulating the edit
         */
        getEdit(): javax.swing.undo.UndoableEdit;
    }
}
declare namespace javax.swing.event {
    /**
     * Interface implemented by a class interested in hearing about
     * undoable operations.
     *
     * @author Ray Ryan
     */
    interface UndoableEditListener {
        /**
         * An undoable edit happened
         * @param {javax.swing.event.UndoableEditEvent} e
         */
        undoableEditHappened(e: javax.swing.event.UndoableEditEvent): any;
    }
}
declare namespace javax.swing.undo {
    /**
     * Creates an <code>AbstractUndoableEdit</code> which defaults
     * <code>hasBeenDone</code> and <code>alive</code> to <code>true</code>.
     * @class
     */
    class AbstractUndoableEdit implements javax.swing.undo.UndoableEdit {
        /**
         * String returned by <code>getUndoPresentationName</code>;
         * as of Java 2 platform v1.3.1 this field is no longer used. This value
         * is now localized and comes from the defaults table with key
         * <code>AbstractUndoableEdit.undoText</code>.
         *
         * @see javax.swing.UIDefaults
         */
        static UndoName: string;
        /**
         * String returned by <code>getRedoPresentationName</code>;
         * as of Java 2 platform v1.3.1 this field is no longer used. This value
         * is now localized and comes from the defaults table with key
         * <code>AbstractUndoableEdit.redoText</code>.
         *
         * @see javax.swing.UIDefaults
         */
        static RedoName: string;
        /**
         * Defaults to true; becomes false if this edit is undone, true
         * again if it is redone.
         */
        hasBeenDone: boolean;
        /**
         * True if this edit has not received <code>die</code>; defaults
         * to <code>true</code>.
         */
        alive: boolean;
        constructor();
        /**
         * Sets <code>alive</code> to false. Note that this
         * is a one way operation; dead edits cannot be resurrected.
         * Sending <code>undo</code> or <code>redo</code> to
         * a dead edit results in an exception being thrown.
         *
         * <p>Typically an edit is killed when it is consolidated by
         * another edit's <code>addEdit</code> or <code>replaceEdit</code>
         * method, or when it is dequeued from an <code>UndoManager</code>.
         */
        die(): void;
        /**
         * Throws <code>CannotUndoException</code> if <code>canUndo</code>
         * returns <code>false</code>. Sets <code>hasBeenDone</code>
         * to <code>false</code>. Subclasses should override to undo the
         * operation represented by this edit. Override should begin with
         * a call to super.
         *
         * @exception CannotUndoException if <code>canUndo</code>
         * returns <code>false</code>
         * @see     #canUndo
         */
        undo(): void;
        /**
         * Returns true if this edit is <code>alive</code>
         * and <code>hasBeenDone</code> is <code>true</code>.
         *
         * @return {boolean} true if this edit is <code>alive</code>
         * and <code>hasBeenDone</code> is <code>true</code>
         *
         * @see     #die
         * @see     #undo
         * @see     #redo
         */
        canUndo(): boolean;
        /**
         * Throws <code>CannotRedoException</code> if <code>canRedo</code>
         * returns false. Sets <code>hasBeenDone</code> to <code>true</code>.
         * Subclasses should override to redo the operation represented by
         * this edit. Override should begin with a call to super.
         *
         * @exception CannotRedoException if <code>canRedo</code>
         * returns <code>false</code>
         * @see     #canRedo
         */
        redo(): void;
        /**
         * Returns <code>true</code> if this edit is <code>alive</code>
         * and <code>hasBeenDone</code> is <code>false</code>.
         *
         * @return {boolean} <code>true</code> if this edit is <code>alive</code>
         * and <code>hasBeenDone</code> is <code>false</code>
         * @see     #die
         * @see     #undo
         * @see     #redo
         */
        canRedo(): boolean;
        /**
         * This default implementation returns false.
         *
         * @param {javax.swing.undo.UndoableEdit} anEdit the edit to be added
         * @return {boolean} false
         *
         * @see UndoableEdit#addEdit
         */
        addEdit(anEdit: javax.swing.undo.UndoableEdit): boolean;
        /**
         * This default implementation returns false.
         *
         * @param {javax.swing.undo.UndoableEdit} anEdit the edit to replace
         * @return {boolean} false
         *
         * @see UndoableEdit#replaceEdit
         */
        replaceEdit(anEdit: javax.swing.undo.UndoableEdit): boolean;
        /**
         * This default implementation returns true.
         *
         * @return {boolean} true
         * @see UndoableEdit#isSignificant
         */
        isSignificant(): boolean;
        /**
         * This default implementation returns "". Used by
         * <code>getUndoPresentationName</code> and
         * <code>getRedoPresentationName</code> to
         * construct the strings they return. Subclasses should override to
         * return an appropriate description of the operation this edit
         * represents.
         *
         * @return {string} the empty string ""
         *
         * @see     #getUndoPresentationName
         * @see     #getRedoPresentationName
         */
        getPresentationName(): string;
        /**
         * Retreives the value from the defaults table with key
         * <code>AbstractUndoableEdit.undoText</code> and returns
         * that value followed by a space, followed by
         * <code>getPresentationName</code>.
         * If <code>getPresentationName</code> returns "",
         * then the defaults value is returned alone.
         *
         * @return {string} the value from the defaults table with key
         * <code>AbstractUndoableEdit.undoText</code>, followed
         * by a space, followed by <code>getPresentationName</code>
         * unless <code>getPresentationName</code> is "" in which
         * case, the defaults value is returned alone.
         * @see #getPresentationName
         */
        getUndoPresentationName(): string;
        /**
         * Retreives the value from the defaults table with key
         * <code>AbstractUndoableEdit.redoText</code> and returns
         * that value followed by a space, followed by
         * <code>getPresentationName</code>.
         * If <code>getPresentationName</code> returns "",
         * then the defaults value is returned alone.
         *
         * @return {string} the value from the defaults table with key
         * <code>AbstractUndoableEdit.redoText</code>, followed
         * by a space, followed by <code>getPresentationName</code>
         * unless <code>getPresentationName</code> is "" in which
         * case, the defaults value is returned alone.
         * @see #getPresentationName
         */
        getRedoPresentationName(): string;
        /**
         * Returns a string that displays and identifies this
         * object's properties.
         *
         * @return {string} a String representation of this object
         */
        toString(): string;
    }
}
declare namespace javax.swing.undo {
    /**
     * Thrown when an UndoableEdit is told to <code>redo()</code> and can't.
     * <p>
     * <strong>Warning:</strong>
     * Serialized objects of this class will not be compatible with
     * future Swing releases. The current serialization support is
     * appropriate for short term storage or RMI between applications running
     * the same version of Swing.  As of 1.4, support for long term storage
     * of all JavaBeans&trade;
     * has been added to the <code>java.beans</code> package.
     * Please see {@link java.beans.XMLEncoder}.
     *
     * @author Ray Ryan
     * @extends Error
     */
    class CannotRedoException extends Error {
        constructor();
    }
}
declare namespace javax.swing.undo {
    /**
     * Thrown when an UndoableEdit is told to <code>undo()</code> and can't.
     * <p>
     * <strong>Warning:</strong>
     * Serialized objects of this class will not be compatible with
     * future Swing releases. The current serialization support is
     * appropriate for short term storage or RMI between applications running
     * the same version of Swing.  As of 1.4, support for long term storage
     * of all JavaBeans&trade;
     * has been added to the <code>java.beans</code> package.
     * Please see {@link java.beans.XMLEncoder}.
     *
     * @author Ray Ryan
     * @extends Error
     */
    class CannotUndoException extends Error {
        constructor();
    }
}
declare namespace javax.swing.undo {
    /**
     * StateEditable defines the interface for objects that can have
     * their state undone/redone by a StateEdit.
     *
     * @see StateEdit
     */
    interface StateEditable {
        /**
         * Upon receiving this message the receiver should place any relevant
         * state into <EM>state</EM>.
         * @param {*} state
         */
        storeState(state: any): any;
        /**
         * Upon receiving this message the receiver should extract any relevant
         * state out of <EM>state</EM>.
         * @param {*} state
         */
        restoreState(state: any): any;
    }
    namespace StateEditable {
        /**
         * Resource ID for this class.
         */
        let RCSID: string;
    }
}
declare namespace javax.swing.undo {
    /**
     * An <code>UndoableEdit</code> represents an edit.  The edit may
     * be undone, or if already undone the edit may be redone.
     * <p>
     * <code>UndoableEdit</code> is designed to be used with the
     * <code>UndoManager</code>.  As <code>UndoableEdit</code>s are generated
     * by an <code>UndoableEditListener</code> they are typically added to
     * the <code>UndoManager</code>.  When an <code>UndoableEdit</code>
     * is added to an <code>UndoManager</code> the following occurs (assuming
     * <code>end</code> has not been called on the <code>UndoManager</code>):
     * <ol>
     * <li>If the <code>UndoManager</code> contains edits it will call
     * <code>addEdit</code> on the current edit passing in the new edit
     * as the argument.  If <code>addEdit</code> returns true the
     * new edit is assumed to have been incorporated into the current edit and
     * the new edit will not be added to the list of current edits.
     * Edits can use <code>addEdit</code> as a way for smaller edits to
     * be incorporated into a larger edit and treated as a single edit.
     * <li>If <code>addEdit</code> returns false <code>replaceEdit</code>
     * is called on the new edit with the current edit passed in as the
     * argument. This is the inverse of <code>addEdit</code> &#151;
     * if the new edit returns true from <code>replaceEdit</code>, the new
     * edit replaces the current edit.
     * </ol>
     * The <code>UndoManager</code> makes use of
     * <code>isSignificant</code> to determine how many edits should be
     * undone or redone.  The <code>UndoManager</code> will undo or redo
     * all insignificant edits (<code>isSignificant</code> returns false)
     * between the current edit and the last or
     * next significant edit.   <code>addEdit</code> and
     * <code>replaceEdit</code> can be used to treat multiple edits as
     * a single edit, returning false from <code>isSignificant</code>
     * allows for treating can be used to
     * have many smaller edits undone or redone at once.  Similar functionality
     * can also be done using the <code>addEdit</code> method.
     *
     * @author Ray Ryan
     */
    interface UndoableEdit {
        /**
         * Undo the edit.
         *
         * @throws CannotUndoException if this edit can not be undone
         */
        undo(): any;
        /**
         * Returns true if this edit may be undone.
         *
         * @return {boolean} true if this edit may be undone
         */
        canUndo(): boolean;
        /**
         * Re-applies the edit.
         *
         * @throws CannotRedoException if this edit can not be redone
         */
        redo(): any;
        /**
         * Returns true if this edit may be redone.
         *
         * @return {boolean} true if this edit may be redone
         */
        canRedo(): boolean;
        /**
         * Informs the edit that it should no longer be used. Once an
         * <code>UndoableEdit</code> has been marked as dead it can no longer
         * be undone or redone.
         * <p>
         * This is a useful hook for cleaning up state no longer
         * needed once undoing or redoing is impossible--for example,
         * deleting file resources used by objects that can no longer be
         * undeleted. <code>UndoManager</code> calls this before it dequeues edits.
         * <p>
         * Note that this is a one-way operation. There is no "un-die"
         * method.
         *
         * @see CompoundEdit#die
         */
        die(): any;
        /**
         * Adds an <code>UndoableEdit</code> to this <code>UndoableEdit</code>.
         * This method can be used to coalesce smaller edits into a larger
         * compound edit.  For example, text editors typically allow
         * undo operations to apply to words or sentences.  The text
         * editor may choose to generate edits on each key event, but allow
         * those edits to be coalesced into a more user-friendly unit, such as
         * a word. In this case, the <code>UndoableEdit</code> would
         * override <code>addEdit</code> to return true when the edits may
         * be coalesced.
         * <p>
         * A return value of true indicates <code>anEdit</code> was incorporated
         * into this edit.  A return value of false indicates <code>anEdit</code>
         * may not be incorporated into this edit.
         * <p>Typically the receiver is already in the queue of a
         * <code>UndoManager</code> (or other <code>UndoableEditListener</code>),
         * and is being given a chance to incorporate <code>anEdit</code>
         * rather than letting it be added to the queue in turn.</p>
         *
         * <p>If true is returned, from now on <code>anEdit</code> must return
         * false from <code>canUndo</code> and <code>canRedo</code>,
         * and must throw the appropriate exception on <code>undo</code> or
         * <code>redo</code>.</p>
         *
         * @param {javax.swing.undo.UndoableEdit} anEdit the edit to be added
         * @return {boolean} true if <code>anEdit</code> may be incorporated into this
         * edit
         */
        addEdit(anEdit: UndoableEdit): boolean;
        /**
         * Returns true if this <code>UndoableEdit</code> should replace
         * <code>anEdit</code>. This method is used by <code>CompoundEdit</code>
         * and the <code>UndoManager</code>; it is called if
         * <code>anEdit</code> could not be added to the current edit
         * (<code>addEdit</code> returns false).
         * <p>
         * This method provides a way for an edit to replace an existing edit.
         * <p>This message is the opposite of addEdit--anEdit has typically
         * already been queued in an <code>UndoManager</code> (or other
         * UndoableEditListener), and the receiver is being given a chance
         * to take its place.</p>
         *
         * <p>If true is returned, from now on anEdit must return false from
         * canUndo() and canRedo(), and must throw the appropriate
         * exception on undo() or redo().</p>
         *
         * @param {javax.swing.undo.UndoableEdit} anEdit the edit that replaces the current edit
         * @return {boolean} true if this edit should replace <code>anEdit</code>
         */
        replaceEdit(anEdit: UndoableEdit): boolean;
        /**
         * Returns true if this edit is considered significant.  A significant
         * edit is typically an edit that should be presented to the user, perhaps
         * on a menu item or tooltip.  The <code>UndoManager</code> will undo,
         * or redo, all insignificant edits to the next significant edit.
         *
         * @return {boolean} true if this edit is significant
         */
        isSignificant(): boolean;
        /**
         * Returns a localized, human-readable description of this edit, suitable
         * for use in a change log, for example.
         *
         * @return {string} description of this edit
         */
        getPresentationName(): string;
        /**
         * Returns a localized, human-readable description of the undoable form of
         * this edit, suitable for use as an Undo menu item, for example.
         * This is typically derived from <code>getPresentationName</code>.
         *
         * @return {string} a description of the undoable form of this edit
         */
        getUndoPresentationName(): string;
        /**
         * Returns a localized, human-readable description of the redoable form of
         * this edit, suitable for use as a Redo menu item, for example. This is
         * typically derived from <code>getPresentationName</code>.
         *
         * @return {string} a description of the redoable form of this edit
         */
        getRedoPresentationName(): string;
    }
}
declare namespace javax.swing.undo {
    /**
     * Constructs an <code>UndoableEditSupport</code> object.
     *
     * @param {*} r
     * an <code>Object</code>
     * @class
     */
    class UndoableEditSupport {
        updateLevel: number;
        compoundEdit: javax.swing.undo.CompoundEdit;
        listeners: Array<javax.swing.event.UndoableEditListener>;
        realSource: any;
        constructor(r?: any);
        /**
         * Registers an <code>UndoableEditListener</code>. The listener is notified
         * whenever an edit occurs which can be undone.
         *
         * @param {javax.swing.event.UndoableEditListener} l
         * an <code>UndoableEditListener</code> object
         * @see #removeUndoableEditListener
         */
        addUndoableEditListener(l: javax.swing.event.UndoableEditListener): void;
        /**
         * Removes an <code>UndoableEditListener</code>.
         *
         * @param {javax.swing.event.UndoableEditListener} l
         * the <code>UndoableEditListener</code> object to be removed
         * @see #addUndoableEditListener
         */
        removeUndoableEditListener(l: javax.swing.event.UndoableEditListener): void;
        /**
         * Returns an array of all the <code>UndoableEditListener</code>s added to
         * this UndoableEditSupport with addUndoableEditListener().
         *
         * @return {Array} all of the <code>UndoableEditListener</code>s added or an empty
         * array if no listeners have been added
         * @since 1.4
         */
        getUndoableEditListeners(): javax.swing.event.UndoableEditListener[];
        /**
         * Called only from <code>postEdit</code> and <code>endUpdate</code>. Calls
         * <code>undoableEditHappened</code> in all listeners. No synchronization is
         * performed here, since the two calling methods are synchronized.
         * @param {javax.swing.undo.UndoableEdit} e
         */
        _postEdit(e: javax.swing.undo.UndoableEdit): void;
        /**
         * DEADLOCK WARNING: Calling this method may call
         * <code>undoableEditHappened</code> in all listeners. It is unwise to call
         * this method from one of its listeners.
         * @param {javax.swing.undo.UndoableEdit} e
         */
        postEdit(e: javax.swing.undo.UndoableEdit): void;
        /**
         * Returns the update level value.
         *
         * @return {number} an integer representing the update level
         */
        getUpdateLevel(): number;
        /**
         *
         */
        beginUpdate(): void;
        /**
         * Called only from <code>beginUpdate</code>. Exposed here for subclasses'
         * use.
         * @return {javax.swing.undo.CompoundEdit}
         */
        createCompoundEdit(): javax.swing.undo.CompoundEdit;
        /**
         * DEADLOCK WARNING: Calling this method may call
         * <code>undoableEditHappened</code> in all listeners. It is unwise to call
         * this method from one of its listeners.
         */
        endUpdate(): void;
        /**
         * Returns a string that displays and identifies this object's properties.
         *
         * @return {string} a <code>String</code> representation of this object
         */
        toString(): string;
    }
}
declare namespace javax.swing.undo {
    /**
     * A concrete subclass of AbstractUndoableEdit, used to assemble little
     * UndoableEdits into great big ones.
     *
     * @author Ray Ryan
     * @extends javax.swing.undo.AbstractUndoableEdit
     */
    class CompoundEdit extends javax.swing.undo.AbstractUndoableEdit {
        /**
         * True if this edit has never received <code>end</code>.
         */
        inProgress: boolean;
        /**
         * The collection of <code>UndoableEdit</code>s
         * undone/redone en masse by this <code>CompoundEdit</code>.
         */
        edits: Array<javax.swing.undo.UndoableEdit>;
        constructor();
        /**
         * Sends <code>undo</code> to all contained
         * <code>UndoableEdits</code> in the reverse of
         * the order in which they were added.
         */
        undo(): void;
        /**
         * Sends <code>redo</code> to all contained
         * <code>UndoableEdit</code>s in the order in
         * which they were added.
         */
        redo(): void;
        /**
         * Returns the last <code>UndoableEdit</code> in
         * <code>edits</code>, or <code>null</code>
         * if <code>edits</code> is empty.
         * @return {javax.swing.undo.UndoableEdit}
         */
        lastEdit(): javax.swing.undo.UndoableEdit;
        /**
         * Sends <code>die</code> to each subedit,
         * in the reverse of the order that they were added.
         */
        die(): void;
        /**
         * If this edit is <code>inProgress</code>,
         * accepts <code>anEdit</code> and returns true.
         *
         * <p>The last edit added to this <code>CompoundEdit</code>
         * is given a chance to <code>addEdit(anEdit)</code>.
         * If it refuses (returns false), <code>anEdit</code> is
         * given a chance to <code>replaceEdit</code> the last edit.
         * If <code>anEdit</code> returns false here,
         * it is added to <code>edits</code>.
         *
         * @param {javax.swing.undo.UndoableEdit} anEdit the edit to be added
         * @return {boolean} true if the edit is <code>inProgress</code>;
         * otherwise returns false
         */
        addEdit(anEdit: javax.swing.undo.UndoableEdit): boolean;
        /**
         * Sets <code>inProgress</code> to false.
         *
         * @see #canUndo
         * @see #canRedo
         */
        end(): void;
        /**
         * Returns false if <code>isInProgress</code> or if super
         * returns false.
         *
         * @see     #isInProgress
         * @return {boolean}
         */
        canUndo(): boolean;
        /**
         * Returns false if <code>isInProgress</code> or if super
         * returns false.
         *
         * @see     #isInProgress
         * @return {boolean}
         */
        canRedo(): boolean;
        /**
         * Returns true if this edit is in progress--that is, it has not
         * received end. This generally means that edits are still being
         * added to it.
         *
         * @see     #end
         * @return {boolean}
         */
        isInProgress(): boolean;
        /**
         * Returns true if any of the <code>UndoableEdit</code>s
         * in <code>edits</code> do.
         * Returns false if they all return false.
         * @return {boolean}
         */
        isSignificant(): boolean;
        /**
         * Returns <code>getPresentationName</code> from the
         * last <code>UndoableEdit</code> added to
         * <code>edits</code>. If <code>edits</code> is empty,
         * calls super.
         * @return {string}
         */
        getPresentationName(): string;
        /**
         * Returns <code>getUndoPresentationName</code>
         * from the last <code>UndoableEdit</code>
         * added to <code>edits</code>.
         * If <code>edits</code> is empty, calls super.
         * @return {string}
         */
        getUndoPresentationName(): string;
        /**
         * Returns <code>getRedoPresentationName</code>
         * from the last <code>UndoableEdit</code>
         * added to <code>edits</code>.
         * If <code>edits</code> is empty, calls super.
         * @return {string}
         */
        getRedoPresentationName(): string;
        /**
         * Returns a string that displays and identifies this
         * object's properties.
         *
         * @return {string} a String representation of this object
         */
        toString(): string;
    }
}
declare namespace javax.swing.undo {
    /**
     * Create and return a new StateEdit with a presentation name.
     *
     * @param {javax.swing.undo.StateEditable} anObject The object to watch for changing state
     * @param {string} name The presentation name to be used for this edit
     *
     * @see StateEdit
     * @class
     */
    class StateEdit extends javax.swing.undo.AbstractUndoableEdit {
        static RCSID: string;
        /**
         * The object being edited
         */
        object: javax.swing.undo.StateEditable;
        /**
         * The state information prior to the edit
         */
        preState: any;
        /**
         * The state information after the edit
         */
        postState: any;
        /**
         * The undo/redo presentation name
         */
        undoRedoName: string;
        constructor(anObject?: any, name?: any);
        init(anObject: javax.swing.undo.StateEditable, name: string): void;
        /**
         * Gets the post-edit state of the StateEditable object and
         * ends the edit.
         */
        end(): void;
        /**
         * Tells the edited object to apply the state prior to the edit
         */
        undo(): void;
        /**
         * Tells the edited object to apply the state after the edit
         */
        redo(): void;
        /**
         * Gets the presentation name for this edit
         * @return {string}
         */
        getPresentationName(): string;
        /**
         * Remove redundant key/values in state hashtables.
         */
        removeRedundantState(): void;
    }
}
declare namespace javax.swing.undo {
    /**
     * Creates a new <code>UndoManager</code>.
     * @class
     */
    class UndoManager extends javax.swing.undo.CompoundEdit implements javax.swing.event.UndoableEditListener {
        indexOfNextAdd: number;
        limit: number;
        constructor();
        /**
         * Returns the maximum number of edits this {@code UndoManager}
         * holds. A value less than 0 indicates the number of edits is not
         * limited.
         *
         * @return {number} the maximum number of edits this {@code UndoManager} holds
         * @see #addEdit
         * @see #setLimit
         */
        getLimit(): number;
        /**
         * Empties the undo manager sending each edit a <code>die</code> message
         * in the process.
         *
         * @see AbstractUndoableEdit#die
         */
        discardAllEdits(): void;
        /**
         * Reduces the number of queued edits to a range of size limit,
         * centered on the index of the next edit.
         */
        trimForLimit(): void;
        /**
         * Removes edits in the specified range.
         * All edits in the given range (inclusive, and in reverse order)
         * will have <code>die</code> invoked on them and are removed from
         * the list of edits. This has no effect if
         * <code>from</code> &gt; <code>to</code>.
         *
         * @param {number} from the minimum index to remove
         * @param {number} to the maximum index to remove
         */
        trimEdits(from: number, to: number): void;
        /**
         * Sets the maximum number of edits this <code>UndoManager</code>
         * holds. A value less than 0 indicates the number of edits is not
         * limited. If edits need to be discarded to shrink the limit,
         * <code>die</code> will be invoked on them in the reverse
         * order they were added.  The default is 100.
         *
         * @param {number} l the new limit
         * @throws RuntimeException if this {@code UndoManager} is not in progress
         * ({@code end} has been invoked)
         * @see #isInProgress
         * @see #end
         * @see #addEdit
         * @see #getLimit
         */
        setLimit(l: number): void;
        /**
         * Returns the the next significant edit to be undone if <code>undo</code>
         * is invoked. This returns <code>null</code> if there are no edits
         * to be undone.
         *
         * @return {javax.swing.undo.UndoableEdit} the next significant edit to be undone
         */
        editToBeUndone(): javax.swing.undo.UndoableEdit;
        /**
         * Returns the the next significant edit to be redone if <code>redo</code>
         * is invoked. This returns <code>null</code> if there are no edits
         * to be redone.
         *
         * @return {javax.swing.undo.UndoableEdit} the next significant edit to be redone
         */
        editToBeRedone(): javax.swing.undo.UndoableEdit;
        /**
         * Undoes all changes from the index of the next edit to
         * <code>edit</code>, updating the index of the next edit appropriately.
         *
         * @throws CannotUndoException if one of the edits throws
         * <code>CannotUndoException</code>
         * @param {javax.swing.undo.UndoableEdit} edit
         */
        undoTo(edit: javax.swing.undo.UndoableEdit): void;
        /**
         * Redoes all changes from the index of the next edit to
         * <code>edit</code>, updating the index of the next edit appropriately.
         *
         * @throws CannotRedoException if one of the edits throws
         * <code>CannotRedoException</code>
         * @param {javax.swing.undo.UndoableEdit} edit
         */
        redoTo(edit: javax.swing.undo.UndoableEdit): void;
        /**
         * Convenience method that invokes one of <code>undo</code> or
         * <code>redo</code>. If any edits have been undone (the index of
         * the next edit is less than the length of the edits list) this
         * invokes <code>redo</code>, otherwise it invokes <code>undo</code>.
         *
         * @see #canUndoOrRedo
         * @see #getUndoOrRedoPresentationName
         * @throws CannotUndoException if one of the edits throws
         * <code>CannotUndoException</code>
         * @throws CannotRedoException if one of the edits throws
         * <code>CannotRedoException</code>
         */
        undoOrRedo(): void;
        /**
         * Returns true if it is possible to invoke <code>undo</code> or
         * <code>redo</code>.
         *
         * @return {boolean} true if invoking <code>canUndoOrRedo</code> is valid
         * @see #undoOrRedo
         */
        canUndoOrRedo(): boolean;
        /**
         * Undoes the appropriate edits.  If <code>end</code> has been
         * invoked this calls through to the superclass, otherwise
         * this invokes <code>undo</code> on all edits between the
         * index of the next edit and the last significant edit, updating
         * the index of the next edit appropriately.
         *
         * @throws CannotUndoException if one of the edits throws
         * <code>CannotUndoException</code> or there are no edits
         * to be undone
         * @see CompoundEdit#end
         * @see #canUndo
         * @see #editToBeUndone
         */
        undo(): void;
        /**
         * Returns true if edits may be undone.  If <code>end</code> has
         * been invoked, this returns the value from super.  Otherwise
         * this returns true if there are any edits to be undone
         * (<code>editToBeUndone</code> returns non-<code>null</code>).
         *
         * @return {boolean} true if there are edits to be undone
         * @see CompoundEdit#canUndo
         * @see #editToBeUndone
         */
        canUndo(): boolean;
        /**
         * Redoes the appropriate edits.  If <code>end</code> has been
         * invoked this calls through to the superclass.  Otherwise
         * this invokes <code>redo</code> on all edits between the
         * index of the next edit and the next significant edit, updating
         * the index of the next edit appropriately.
         *
         * @throws CannotRedoException if one of the edits throws
         * <code>CannotRedoException</code> or there are no edits
         * to be redone
         * @see CompoundEdit#end
         * @see #canRedo
         * @see #editToBeRedone
         */
        redo(): void;
        /**
         * Returns true if edits may be redone.  If <code>end</code> has
         * been invoked, this returns the value from super.  Otherwise,
         * this returns true if there are any edits to be redone
         * (<code>editToBeRedone</code> returns non-<code>null</code>).
         *
         * @return {boolean} true if there are edits to be redone
         * @see CompoundEdit#canRedo
         * @see #editToBeRedone
         */
        canRedo(): boolean;
        /**
         * Adds an <code>UndoableEdit</code> to this
         * <code>UndoManager</code>, if it's possible.  This removes all
         * edits from the index of the next edit to the end of the edits
         * list.  If <code>end</code> has been invoked the edit is not added
         * and <code>false</code> is returned.  If <code>end</code> hasn't
         * been invoked this returns <code>true</code>.
         *
         * @param {javax.swing.undo.UndoableEdit} anEdit the edit to be added
         * @return {boolean} true if <code>anEdit</code> can be incorporated into this
         * edit
         * @see CompoundEdit#end
         * @see CompoundEdit#addEdit
         */
        addEdit(anEdit: javax.swing.undo.UndoableEdit): boolean;
        /**
         * Turns this <code>UndoManager</code> into a normal
         * <code>CompoundEdit</code>.  This removes all edits that have
         * been undone.
         *
         * @see CompoundEdit#end
         */
        end(): void;
        /**
         * Convenience method that returns either
         * <code>getUndoPresentationName</code> or
         * <code>getRedoPresentationName</code>.  If the index of the next
         * edit equals the size of the edits list,
         * <code>getUndoPresentationName</code> is returned, otherwise
         * <code>getRedoPresentationName</code> is returned.
         *
         * @return {string} undo or redo name
         */
        getUndoOrRedoPresentationName(): string;
        /**
         * Returns a description of the undoable form of this edit.
         * If <code>end</code> has been invoked this calls into super.
         * Otherwise if there are edits to be undone, this returns
         * the value from the next significant edit that will be undone.
         * If there are no edits to be undone and <code>end</code> has not
         * been invoked this returns the value from the <code>UIManager</code>
         * property "AbstractUndoableEdit.undoText".
         *
         * @return {string} a description of the undoable form of this edit
         * @see     #undo
         * @see     CompoundEdit#getUndoPresentationName
         */
        getUndoPresentationName(): string;
        /**
         * Returns a description of the redoable form of this edit.
         * If <code>end</code> has been invoked this calls into super.
         * Otherwise if there are edits to be redone, this returns
         * the value from the next significant edit that will be redone.
         * If there are no edits to be redone and <code>end</code> has not
         * been invoked this returns the value from the <code>UIManager</code>
         * property "AbstractUndoableEdit.redoText".
         *
         * @return {string} a description of the redoable form of this edit
         * @see     #redo
         * @see     CompoundEdit#getRedoPresentationName
         */
        getRedoPresentationName(): string;
        /**
         * An <code>UndoableEditListener</code> method. This invokes
         * <code>addEdit</code> with <code>e.getEdit()</code>.
         *
         * @param {javax.swing.event.UndoableEditEvent} e the <code>UndoableEditEvent</code> the
         * <code>UndoableEditEvent</code> will be added from
         * @see #addEdit
         */
        undoableEditHappened(e: javax.swing.event.UndoableEditEvent): void;
        /**
         * Returns a string that displays and identifies this
         * object's properties.
         *
         * @return {string} a String representation of this object
         */
        toString(): string;
    }
}
