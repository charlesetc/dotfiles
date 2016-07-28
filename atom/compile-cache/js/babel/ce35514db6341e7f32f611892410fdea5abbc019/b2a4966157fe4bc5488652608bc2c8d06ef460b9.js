var _helpers = require('./helpers');

var _treeViewSettings = require('./tree-view-settings');

'use babel';
'use strict';

function init() {
    (0, _helpers.toggleClass)(atom.config.get('atom-material-ui.tabs.tintedTabBar'), 'tinted-tab-bar');
    (0, _helpers.toggleClass)(atom.config.get('atom-material-ui.tabs.compactTabs'), 'compact-tab-bar');
    (0, _helpers.toggleClass)(atom.config.get('atom-material-ui.ui.panelShadows'), 'panel-shadows');
    (0, _helpers.toggleClass)(atom.config.get('atom-material-ui.ui.panelContrast'), 'panel-contrast');
    (0, _helpers.toggleClass)(atom.config.get('atom-material-ui.ui.animations'), 'use-animations');
    (0, _helpers.toggleClass)(atom.config.get('atom-material-ui.treeView.compactList'), 'compact-tree-view');
    (0, _helpers.toggleClass)(atom.config.get('atom-material-ui.treeView.blendTabs'), 'blend-tree-view');
    (0, _treeViewSettings.toggleBlendTreeView)(atom.config.get('atom-material-ui.treeView.blendTabs'));

    document.querySelector(':root').style.fontSize = atom.config.get('atom-material-ui.fonts.fontSize') + 'px';
}

// Check if there are custom icons packages
function checkPacks() {
    var root = document.querySelector('atom-workspace');
    var loadedPackages = atom.packages.getActivePackages();
    var iconPacks = ['file-icons', 'file-type-icons', 'seti-icons', 'envygeeks-file-icons'];

    root.classList.remove('has-custom-icons');

    loadedPackages.forEach(function (pack) {
        if (iconPacks.indexOf(pack.name) >= 0) {
            root.classList.add('has-custom-icons');
        }
    });
}

function apply() {
    atom.packages.onDidActivatePackage(function () {
        return checkPacks();
    });
    atom.packages.onDidDeactivatePackage(function () {
        return checkPacks();
    });

    init();

    // Font Size Settings

    atom.config.onDidChange('atom-material-ui.fonts.fontSize', function (value) {
        var fontSize = Math.round(value.newValue);
        document.querySelector(':root').style.fontSize = fontSize + 'px';
    });

    // Tab blending

    atom.config.onDidChange('atom-material-ui.treeView.blendTabs', function (value) {
        return (0, _treeViewSettings.toggleBlendTreeView)(value.newValue);
    });

    // className-toggling Settings

    atom.config.onDidChange('atom-material-ui.tabs.tintedTabBar', function (value) {
        return (0, _helpers.toggleClass)(value.newValue, 'tinted-tab-bar');
    });
    atom.config.onDidChange('atom-material-ui.tabs.compactTabs', function (value) {
        return (0, _helpers.toggleClass)(value.newValue, 'compact-tab-bar');
    });
    atom.config.onDidChange('atom-material-ui.ui.animations', function (value) {
        return (0, _helpers.toggleClass)(value.newValue, 'use-animations');
    });
    atom.config.onDidChange('atom-material-ui.ui.panelShadows', function (value) {
        return (0, _helpers.toggleClass)(value.newValue, 'panel-shadows');
    });
    atom.config.onDidChange('atom-material-ui.ui.panelContrast', function (value) {
        return (0, _helpers.toggleClass)(value.newValue, 'panel-contrast');
    });
    atom.config.onDidChange('atom-material-ui.treeView.compactList', function (value) {
        return (0, _helpers.toggleClass)(value.newValue, 'compact-tree-view');
    });
    atom.config.onDidChange('atom-material-ui.treeView.blendTabs', function (value) {
        if (value.newValue && !atom.config.get('atom-material-ui.tabs.tintedTabBar')) {
            atom.config.set('atom-material-ui.tabs.tintedTabBar', true);
        }

        (0, _helpers.toggleClass)(value.newValue, 'blend-tree-view');
    });
}

module.exports = { apply: apply };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NoYXJsZXMvLmF0b20vcGFja2FnZXMvYXRvbS1tYXRlcmlhbC11aS9saWIvc2V0dGluZ3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InVCQUc0QixXQUFXOztnQ0FDSCxzQkFBc0I7O0FBSjFELFdBQVcsQ0FBQztBQUNaLFlBQVksQ0FBQzs7QUFLYixTQUFTLElBQUksR0FBRztBQUNaLDhCQUFZLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUNyRiw4QkFBWSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxFQUFFLGlCQUFpQixDQUFDLENBQUM7QUFDckYsOEJBQVksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLENBQUMsRUFBRSxlQUFlLENBQUMsQ0FBQztBQUNsRiw4QkFBWSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFDcEYsOEJBQVksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ2pGLDhCQUFZLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxDQUFDLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztBQUMzRiw4QkFBWSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxFQUFFLGlCQUFpQixDQUFDLENBQUM7QUFDdkYsK0NBQW9CLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxDQUFDLENBQUMsQ0FBQzs7QUFFNUUsWUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLE9BQUksQ0FBQztD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b0MsQ0FBQyxFQUFFO0FBQzFFLGdCQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUMvRDs7QUFFRCxrQ0FBWSxLQUFLLENBQUMsUUFBUSxFQUFFLGlCQUFpQixDQUFDLENBQUM7S0FDbEQsQ0FBQyxDQUFDO0NBQ047O0FBRUQsTUFBTSxDQUFDLE9BQU8sR0FBRyxFQUFFLEtBQUssRUFBTCxLQUFLLEVBQUUsQ0FBQyIsImZpbGUiOiIvaG9tZS9jaGFybGVzLy5hdG9tL3BhY2thZ2VzL2F0b20tbWF0ZXJpYWwtdWkvbGliL3NldHRpbmdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBiYWJlbCc7XG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7IHRvZ2dsZUNsYXNzIH0gZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCB7IHRvZ2dsZUJsZW5kVHJlZVZpZXcgfSBmcm9tICcuL3RyZWUtdmlldy1zZXR0aW5ncyc7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgdG9nZ2xlQ2xhc3MoYXRvbS5jb25maWcuZ2V0KCdhdG9tLW1hdGVyaWFsLXVpLnRhYnMudGludGVkVGFiQmFyJyksICd0aW50ZWQtdGFiLWJhcicpO1xuICAgIHRvZ2dsZUNsYXNzKGF0b20uY29uZmlnLmdldCgnYXRvbS1tYXRlcmlhbC11aS50YWJzLmNvbXBhY3RUYWJzJyksICdjb21wYWN0LXRhYi1iYXInKTtcbiAgICB0b2dnbGVDbGFzcyhhdG9tLmNvbmZpZy5nZXQoJ2F0b20tbWF0ZXJpYWwtdWkudWkucGFuZWxTaGFkb3dzJyksICdwYW5lbC1zaGFkb3dzJyk7XG4gICAgdG9nZ2xlQ2xhc3MoYXRvbS5jb25maWcuZ2V0KCdhdG9tLW1hdGVyaWFsLXVpLnVpLnBhbmVsQ29udHJhc3QnKSwgJ3BhbmVsLWNvbnRyYXN0Jyk7XG4gICAgdG9nZ2xlQ2xhc3MoYXRvbS5jb25maWcuZ2V0KCdhdG9tLW1hdGVyaWFsLXVpLnVpLmFuaW1hdGlvbnMnKSwgJ3VzZS1hbmltYXRpb25zJyk7XG4gICAgdG9nZ2xlQ2xhc3MoYXRvbS5jb25maWcuZ2V0KCdhdG9tLW1hdGVyaWFsLXVpLnRyZWVWaWV3LmNvbXBhY3RMaXN0JyksICdjb21wYWN0LXRyZWUtdmlldycpO1xuICAgIHRvZ2dsZUNsYXNzKGF0b20uY29uZmlnLmdldCgnYXRvbS1tYXRlcmlhbC11aS50cmVlVmlldy5ibGVuZFRhYnMnKSwgJ2JsZW5kLXRyZWUtdmlldycpO1xuICAgIHRvZ2dsZUJsZW5kVHJlZVZpZXcoYXRvbS5jb25maWcuZ2V0KCdhdG9tLW1hdGVyaWFsLXVpLnRyZWVWaWV3LmJsZW5kVGFicycpKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpyb290Jykuc3R5bGUuZm9udFNpemUgPSBgJHthdG9tLmNvbmZpZy5nZXQoJ2F0b20tbWF0ZXJpYWwtdWkuZm9udHMuZm9udFNpemUnKX1weGA7XG59XG5cbi8vIENoZWNrIGlmIHRoZXJlIGFyZSBjdXN0b20gaWNvbnMgcGFja2FnZXNcbmZ1bmN0aW9uIGNoZWNrUGFja3MoKSB7XG4gICAgdmFyIHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhdG9tLXdvcmtzcGFjZScpO1xuICAgIHZhciBsb2FkZWRQYWNrYWdlcyA9IGF0b20ucGFja2FnZXMuZ2V0QWN0aXZlUGFja2FnZXMoKTtcbiAgICB2YXIgaWNvblBhY2tzID0gWydmaWxlLWljb25zJywgJ2ZpbGUtdHlwZS1pY29ucycsICdzZXRpLWljb25zJywgJ2VudnlnZWVrcy1maWxlLWljb25zJ107XG5cbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1jdXN0b20taWNvbnMnKTtcblxuICAgIGxvYWRlZFBhY2thZ2VzLmZvckVhY2goKHBhY2spID0+IHtcbiAgICAgICAgaWYgKGljb25QYWNrcy5pbmRleE9mKHBhY2submFtZSkgPj0gMCkge1xuICAgICAgICAgICAgcm9vdC5jbGFzc0xpc3QuYWRkKCdoYXMtY3VzdG9tLWljb25zJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYXBwbHkoKSB7XG4gICAgYXRvbS5wYWNrYWdlcy5vbkRpZEFjdGl2YXRlUGFja2FnZSgoKSA9PiBjaGVja1BhY2tzKCkpO1xuICAgIGF0b20ucGFja2FnZXMub25EaWREZWFjdGl2YXRlUGFja2FnZSgoKSA9PiBjaGVja1BhY2tzKCkpO1xuXG4gICAgaW5pdCgpO1xuXG4gICAgLy8gRm9udCBTaXplIFNldHRpbmdzXG5cbiAgICBhdG9tLmNvbmZpZy5vbkRpZENoYW5nZSgnYXRvbS1tYXRlcmlhbC11aS5mb250cy5mb250U2l6ZScsICh2YWx1ZSkgPT4ge1xuICAgICAgICB2YXIgZm9udFNpemUgPSBNYXRoLnJvdW5kKHZhbHVlLm5ld1ZhbHVlKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignOnJvb3QnKS5zdHlsZS5mb250U2l6ZSA9IGAke2ZvbnRTaXplfXB4YDtcbiAgICB9KTtcblxuICAgIC8vIFRhYiBibGVuZGluZ1xuXG4gICAgYXRvbS5jb25maWcub25EaWRDaGFuZ2UoJ2F0b20tbWF0ZXJpYWwtdWkudHJlZVZpZXcuYmxlbmRUYWJzJywgKHZhbHVlKSA9PiB0b2dnbGVCbGVuZFRyZWVWaWV3KHZhbHVlLm5ld1ZhbHVlKSk7XG5cbiAgICAvLyBjbGFzc05hbWUtdG9nZ2xpbmcgU2V0dGluZ3NcblxuICAgIGF0b20uY29uZmlnLm9uRGlkQ2hhbmdlKCdhdG9tLW1hdGVyaWFsLXVpLnRhYnMudGludGVkVGFiQmFyJywgKHZhbHVlKSA9PiB0b2dnbGVDbGFzcyh2YWx1ZS5uZXdWYWx1ZSwgJ3RpbnRlZC10YWItYmFyJykpO1xuICAgIGF0b20uY29uZmlnLm9uRGlkQ2hhbmdlKCdhdG9tLW1hdGVyaWFsLXVpLnRhYnMuY29tcGFjdFRhYnMnLCAodmFsdWUpID0+IHRvZ2dsZUNsYXNzKHZhbHVlLm5ld1ZhbHVlLCAnY29tcGFjdC10YWItYmFyJykpO1xuICAgIGF0b20uY29uZmlnLm9uRGlkQ2hhbmdlKCdhdG9tLW1hdGVyaWFsLXVpLnVpLmFuaW1hdGlvbnMnLCAodmFsdWUpID0+IHRvZ2dsZUNsYXNzKHZhbHVlLm5ld1ZhbHVlLCAndXNlLWFuaW1hdGlvbnMnKSk7XG4gICAgYXRvbS5jb25maWcub25EaWRDaGFuZ2UoJ2F0b20tbWF0ZXJpYWwtdWkudWkucGFuZWxTaGFkb3dzJywgKHZhbHVlKSA9PiB0b2dnbGVDbGFzcyh2YWx1ZS5uZXdWYWx1ZSwgJ3BhbmVsLXNoYWRvd3MnKSk7XG4gICAgYXRvbS5jb25maWcub25EaWRDaGFuZ2UoJ2F0b20tbWF0ZXJpYWwtdWkudWkucGFuZWxDb250cmFzdCcsICh2YWx1ZSkgPT4gdG9nZ2xlQ2xhc3ModmFsdWUubmV3VmFsdWUsICdwYW5lbC1jb250cmFzdCcpKTtcbiAgICBhdG9tLmNvbmZpZy5vbkRpZENoYW5nZSgnYXRvbS1tYXRlcmlhbC11aS50cmVlVmlldy5jb21wYWN0TGlzdCcsICh2YWx1ZSkgPT4gdG9nZ2xlQ2xhc3ModmFsdWUubmV3VmFsdWUsICdjb21wYWN0LXRyZWUtdmlldycpKTtcbiAgICBhdG9tLmNvbmZpZy5vbkRpZENoYW5nZSgnYXRvbS1tYXRlcmlhbC11aS50cmVlVmlldy5ibGVuZFRhYnMnLCAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlLm5ld1ZhbHVlICYmICFhdG9tLmNvbmZpZy5nZXQoJ2F0b20tbWF0ZXJpYWwtdWkudGFicy50aW50ZWRUYWJCYXInKSkge1xuICAgICAgICAgICAgYXRvbS5jb25maWcuc2V0KCdhdG9tLW1hdGVyaWFsLXVpLnRhYnMudGludGVkVGFiQmFyJywgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0b2dnbGVDbGFzcyh2YWx1ZS5uZXdWYWx1ZSwgJ2JsZW5kLXRyZWUtdmlldycpO1xuICAgIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgYXBwbHkgfTtcbiJdfQ==
//# sourceURL=/home/charles/.atom/packages/atom-material-ui/lib/settings.js
